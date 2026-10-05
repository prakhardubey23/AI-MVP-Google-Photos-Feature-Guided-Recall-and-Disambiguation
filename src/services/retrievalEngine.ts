import { PHOTO_LIBRARY } from '../data/photoLibrary';
import {
  PhotoRecord,
  ParsedMemoryEntities,
  RefinementChip,
  DisambiguationCluster,
  ClarificationQuestion,
  TimeOfDay
} from '../types/photo';

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'in', 'on', 'at', 'of', 'for', 'to', 'from', 'with', 'by',
  'and', 'or', 'that', 'this', 'those', 'these', 'my', 'me', 'i', 'we', 'our',
  'photo', 'photos', 'picture', 'pictures', 'pic', 'pics', 'image', 'images',
  'show', 'find', 'get', 'looking', 'look', 'search', 'some', 'where', 'when',
  'was', 'were', 'is', 'are', 'about', 'taken', 'under', 'over', 'behind', 'near',
  'between', 'during', 'into', 'along', 'around', 'like', 'all', 'just', 'there',
  'here', 'one', 'two', 'what', 'which', 'who', 'whom', 'whose', 'why', 'how'
]);

/**
 * Searches the authoritative photo library using grounded token and semantic clue scoring.
 * Only returns genuinely matching photos with score above a strict threshold.
 * Never returns unrelated or random photos.
 */
export function searchPhotoLibrary(query: string, entities: ParsedMemoryEntities): PhotoRecord[] {
  const q = query.toLowerCase().trim();
  if (!q) return [...PHOTO_LIBRARY];

  // Extract meaningful query tokens excluding stop words
  const tokens = q
    .split(/[^a-zA-Z0-9]+/)
    .filter(t => t.length > 1 && !STOP_WORDS.has(t));

  if (tokens.length === 0 && entities.rawClues.length === 0) {
    return [];
  }

  const hasParsedEntities = (
    entities.events.length > 0 ||
    entities.people.length > 0 ||
    entities.locations.length > 0 ||
    entities.scenes.length > 0 ||
    entities.activities.length > 0 ||
    entities.objects.length > 0 ||
    entities.rawClues.length > 0 ||
    Boolean(entities.timeRange?.timeOfDay) ||
    Boolean(entities.timeRange?.approxYear)
  );

  const scored = PHOTO_LIBRARY.map(photo => {
    let score = 0;

    // Construct unified searchable corpus for this photo
    const corpus = [
      photo.fileName,
      photo.dateDisplay,
      photo.year.toString(),
      photo.subEvent || '',
      photo.caption,
      photo.memoryStory || '',
      photo.location.city || '',
      photo.location.placeName || '',
      photo.location.state || '',
      photo.location.country || '',
      ...photo.eventContext,
      ...photo.people,
      ...photo.scenes,
      ...photo.activities,
      ...photo.objects,
      photo.timeOfDay,
      photo.visualCharacteristics.isSelfie ? 'selfie front camera' : '',
      photo.visualCharacteristics.isGroupPhoto ? 'group photo friends' : '',
      photo.visualCharacteristics.isBurstCandidate ? 'burst sequence' : ''
    ].join(' ').toLowerCase();

    // 1. Direct Token Matching
    let matchedTokenCount = 0;
    for (const token of tokens) {
      if (corpus.includes(token)) {
        matchedTokenCount++;
        // Tag-level specific bonuses
        if (photo.people.some(p => p.toLowerCase().includes(token))) {
          score += 15;
        } else if (photo.eventContext.some(e => e.toLowerCase().includes(token))) {
          score += 12;
        } else if (photo.objects.some(o => o.toLowerCase().includes(token))) {
          score += 10;
        } else if (photo.scenes.some(s => s.toLowerCase().includes(token))) {
          score += 8;
        } else if (photo.location.city?.toLowerCase().includes(token) || photo.location.placeName?.toLowerCase().includes(token)) {
          score += 10;
        } else {
          score += 4;
        }
      }
    }

    // Boost photos that match a higher percentage of query tokens
    if (tokens.length > 1 && matchedTokenCount >= 2) {
      score += matchedTokenCount * 5;
    }

    // 2. Entity Clue Matching from LLM Query Parser
    if (hasParsedEntities) {
      // Event Clues
      for (const ev of entities.events) {
        const evLower = ev.toLowerCase();
        if (photo.eventContext.some(e => e.toLowerCase().includes(evLower)) || corpus.includes(evLower)) {
          score += 14;
        }
      }

      // People Clues
      for (const p of entities.people) {
        const pLower = p.toLowerCase();
        if (photo.people.some(person => person.toLowerCase().includes(pLower)) || corpus.includes(pLower)) {
          score += 18;
        }
      }

      // Location Clues
      for (const loc of entities.locations) {
        const locLower = loc.toLowerCase();
        if (
          photo.location.city?.toLowerCase().includes(locLower) ||
          photo.location.placeName?.toLowerCase().includes(locLower) ||
          photo.location.state?.toLowerCase().includes(locLower) ||
          corpus.includes(locLower)
        ) {
          score += 12;
        }
      }

      // Scene Clues
      for (const s of entities.scenes) {
        const sLower = s.toLowerCase();
        if (photo.scenes.some(sc => sc.toLowerCase().includes(sLower))) {
          score += 9;
        }
        if (sLower === 'selfie' && photo.visualCharacteristics.isSelfie) {
          score += 12;
        }
      }

      // Activity Clues
      for (const a of entities.activities) {
        const aLower = a.toLowerCase();
        if (photo.activities.some(act => act.toLowerCase().includes(aLower))) {
          score += 9;
        }
      }

      // Object Clues
      for (const obj of entities.objects) {
        const objLower = obj.toLowerCase();
        if (photo.objects.some(o => o.toLowerCase().includes(objLower))) {
          score += 10;
        }
      }

      // Time of Day Match
      if (entities.timeRange?.timeOfDay && photo.timeOfDay === entities.timeRange.timeOfDay) {
        score += 4;
      }

      // Year Match
      if (entities.timeRange?.approxYear) {
        const diff = Math.abs(photo.year - entities.timeRange.approxYear);
        if (diff === 0) score += 10;
        else if (diff === 1) score += 4;
      }
    }

    return { photo, score, matchedTokenCount };
  });

  // Calculate highest score in the batch
  const maxScore = Math.max(0, ...scored.map(s => s.score));
  if (maxScore < 6) return [];

  // Cutoff threshold relative to best match: eliminate weakly related noise
  const cutoff = Math.max(6, maxScore * 0.45);

  const filtered = scored
    .filter(item => item.score >= cutoff && (tokens.length <= 1 || item.matchedTokenCount >= 1))
    .sort((a, b) => b.score - a.score)
    .map(item => item.photo);

  return filtered;
}

/**
 * Analyzes the actual candidate set and generates the SINGLE most useful next clarification question
 * with the highest information entropy partition to help the user narrow down to their exact photo.
 */
export function generateCandidateClarification(
  candidatePhotos: PhotoRecord[],
  activeFilters: RefinementChip[],
  _queryText: string
): ClarificationQuestion | null {
  if (candidatePhotos.length <= 1) return null;

  const total = candidatePhotos.length;
  const activeIds = new Set(activeFilters.map(f => f.id));

  // Extract distinct candidate attributes
  const scenes = new Map<string, PhotoRecord[]>();
  const subEvents = new Map<string, PhotoRecord[]>();
  const timeBuckets = new Map<TimeOfDay, PhotoRecord[]>();

  candidatePhotos.forEach(p => {
    p.scenes.forEach(s => {
      const arr = scenes.get(s) || [];
      arr.push(p);
      scenes.set(s, arr);
    });
    if (p.subEvent) {
      const arr = subEvents.get(p.subEvent) || [];
      arr.push(p);
      subEvents.set(p.subEvent, arr);
    }
    const todArr = timeBuckets.get(p.timeOfDay) || [];
    todArr.push(p);
    timeBuckets.set(p.timeOfDay, todArr);
  });

  // Domain-specific tailored questions for common memory candidate sets
  const sceneKeys = Array.from(scenes.keys());

  if (sceneKeys.includes('College Steps') && sceneKeys.includes('Classroom')) {
    return {
      question: 'Are you looking for the formal batch photo on the stairs or the classroom lecture hall photo?',
      options: [
        {
          id: 'scene-college-steps',
          label: 'Formal Batch on Stairs',
          facetType: 'scene',
          value: 'College Steps',
          matchingCount: scenes.get('College Steps')?.length || 0,
          isSelected: false
        },
        {
          id: 'scene-classroom',
          label: 'Classroom Lecture Hall',
          facetType: 'scene',
          value: 'Classroom',
          matchingCount: scenes.get('Classroom')?.length || 0,
          isSelected: false
        }
      ]
    };
  }

  if (sceneKeys.includes('Cricket Stadium')) {
    // If candidates are cricket stadium photos, partition by specific views
    const pitchPhotos = candidatePhotos.filter(p => p.caption.toLowerCase().includes('pitch') || p.caption.toLowerCase().includes('ground') || p.caption.toLowerCase().includes('screen'));
    const crowdPhotos = candidatePhotos.filter(p => p.caption.toLowerCase().includes('fan') || p.caption.toLowerCase().includes('crowd') || p.caption.toLowerCase().includes('face paint') || p.caption.toLowerCase().includes('stand'));

    if (pitchPhotos.length > 0 && crowdPhotos.length > 0) {
      return {
        question: 'Are you looking for photos of the pitch/stadium bowl or fans cheering in the stands?',
        options: [
          {
            id: 'event-pitch-view',
            label: 'Pitch & Stadium Views',
            facetType: 'event',
            value: 'Cricket Ground',
            matchingCount: pitchPhotos.length,
            isSelected: false
          },
          {
            id: 'scene-stadium-stands',
            label: 'Fans in the Stands',
            facetType: 'scene',
            value: 'Stadium Stands',
            matchingCount: crowdPhotos.length,
            isSelected: false
          }
        ]
      };
    }
  }

  // Case 1: Candidates contain distinct scenes
  if (scenes.size >= 2) {
    const validScenes = Array.from(scenes.entries())
      .filter(([_, photos]) => photos.length > 0 && photos.length < total)
      .sort((a, b) => {
        const pA = a[1].length / total;
        const pB = b[1].length / total;
        const entA = -(pA * Math.log2(pA)) - ((1 - pA) * Math.log2(1 - pA));
        const entB = -(pB * Math.log2(pB)) - ((1 - pB) * Math.log2(1 - pB));
        return entB - entA;
      });

    if (validScenes.length >= 2) {
      const scene1 = validScenes[0][0];
      const scene2 = validScenes[1][0];

      return {
        question: `Were you looking for photos from ${scene1} or ${scene2}?`,
        options: validScenes.slice(0, 3).map(([sceneName, photos]) => ({
          id: `scene-${sceneName.toLowerCase().replace(/\s+/g, '-')}`,
          label: sceneName,
          facetType: 'scene',
          value: sceneName,
          matchingCount: photos.length,
          isSelected: false
        }))
      };
    }
  }

  // Case 2: Candidates split by Day vs Night
  const nightCount = timeBuckets.get('night')?.length || 0;
  const dayCount = total - nightCount;
  if (nightCount > 0 && dayCount > 0 && Math.min(nightCount, dayCount) >= 1) {
    return {
      question: 'Was this photo taken during the day or at night under lights?',
      options: [
        {
          id: 'timeOfDay-night',
          label: 'Night Moments',
          facetType: 'timeOfDay',
          value: 'night',
          matchingCount: nightCount,
          isSelected: false
        },
        {
          id: 'timeOfDay-afternoon',
          label: 'Daytime / Outdoors',
          facetType: 'timeOfDay',
          value: 'afternoon',
          matchingCount: dayCount,
          isSelected: false
        }
      ]
    };
  }

  // Case 3: Sub-events / Visual distinctions
  if (subEvents.size >= 2) {
    const topSub = Array.from(subEvents.entries())
      .filter(([_, photos]) => photos.length < total)
      .slice(0, 3);

    if (topSub.length >= 2) {
      return {
        question: 'Which specific moment or angle are you looking for?',
        options: topSub.map(([subName, photos]) => ({
          id: `event-${subName.toLowerCase().replace(/\s+/g, '-')}`,
          label: subName.length > 28 ? subName.slice(0, 26) + '...' : subName,
          facetType: 'event',
          value: subName,
          matchingCount: photos.length,
          isSelected: false
        }))
      };
    }
  }

  return null;
}

/**
 * Computes information entropy / partition gain over remaining candidate photos for Guided Refinement chips.
 */
export function calculateRefinements(
  candidatePhotos: PhotoRecord[],
  activeFilters: RefinementChip[]
): RefinementChip[] {
  if (candidatePhotos.length <= 1) return [];

  const total = candidatePhotos.length;
  const activeIds = new Set(activeFilters.map(f => f.id));

  const facetMap = new Map<string, {
    id: string;
    label: string;
    facetType: RefinementChip['facetType'];
    value: string;
    matchingCount: number;
    entropy: number;
  }>();

  const registerFacet = (
    facetType: RefinementChip['facetType'],
    value: string,
    label: string,
    predicate: (p: PhotoRecord) => boolean
  ) => {
    const id = `${facetType}-${value.toLowerCase().replace(/\s+/g, '-')}`;
    if (activeIds.has(id)) return;

    const matchingCount = candidatePhotos.filter(predicate).length;
    if (matchingCount === 0 || matchingCount === total) return;

    // Binary Shannon entropy calculation
    const p = matchingCount / total;
    const entropy = -(p * Math.log2(p)) - ((1 - p) * Math.log2(1 - p));

    facetMap.set(id, {
      id,
      label,
      facetType,
      value,
      matchingCount,
      entropy
    });
  };

  // 1. Scene Facets
  const scenesSet = new Set<string>();
  candidatePhotos.forEach(p => p.scenes.forEach(s => scenesSet.add(s)));
  scenesSet.forEach(scene => {
    registerFacet('scene', scene, scene, p => p.scenes.includes(scene));
  });

  // 2. People Facets (Real names in library only)
  const peopleSet = new Set<string>();
  candidatePhotos.forEach(p => p.people.forEach(person => peopleSet.add(person)));
  peopleSet.forEach(person => {
    registerFacet('people', person, person, p => p.people.includes(person));
  });

  // 3. Time of Day Facets
  const timeOfDayList: TimeOfDay[] = ['morning', 'afternoon', 'evening', 'night'];
  timeOfDayList.forEach(tod => {
    const label = tod.charAt(0).toUpperCase() + tod.slice(1);
    registerFacet('timeOfDay', tod, label, p => p.timeOfDay === tod);
  });

  // 4. Visual Characteristic Facets
  registerFacet('visual', 'selfie', 'Selfies', p => p.visualCharacteristics.isSelfie);
  registerFacet('visual', 'group', 'Group Photos', p => p.visualCharacteristics.isGroupPhoto);
  registerFacet('visual', 'burst', 'Burst Sequences', p => p.visualCharacteristics.isBurstCandidate);

  // 5. Major Location Facets
  const citySet = new Set<string>();
  candidatePhotos.forEach(p => { if (p.location.city) citySet.add(p.location.city); });
  citySet.forEach(city => {
    registerFacet('event', city, city, p => p.location.city === city);
  });

  // Sort by highest entropy (closest to 50/50 partition) then by count
  return Array.from(facetMap.values())
    .sort((a, b) => {
      if (Math.abs(b.entropy - a.entropy) > 0.05) {
        return b.entropy - a.entropy;
      }
      return b.matchingCount - a.matchingCount;
    })
    .slice(0, 6)
    .map(({ id, label, facetType, value, matchingCount }) => ({
      id,
      label,
      facetType,
      value,
      matchingCount,
      isSelected: false
    }));
}

/**
 * Filters candidates by applying all active refinement chips.
 */
export function applyRefinementFilters(
  initialCandidates: PhotoRecord[],
  activeFilters: RefinementChip[]
): PhotoRecord[] {
  if (activeFilters.length === 0) return initialCandidates;

  return initialCandidates.filter(photo => {
    return activeFilters.every(filter => {
      switch (filter.facetType) {
        case 'people':
          return photo.people.includes(filter.value);
        case 'scene':
          return photo.scenes.some(s => s.toLowerCase() === filter.value.toLowerCase());
        case 'timeOfDay':
          return photo.timeOfDay === filter.value;
        case 'event':
          return (
            photo.location.city === filter.value ||
            photo.subEvent === filter.value ||
            photo.eventContext.some(e => e.toLowerCase().includes(filter.value.toLowerCase())) ||
            photo.scenes.some(s => s.toLowerCase().includes(filter.value.toLowerCase()))
          );
        case 'visual':
          if (filter.value === 'selfie') return photo.visualCharacteristics.isSelfie;
          if (filter.value === 'group') return photo.visualCharacteristics.isGroupPhoto;
          if (filter.value === 'burst') return photo.visualCharacteristics.isBurstCandidate;
          return true;
        default:
          return true;
      }
    });
  });
}

/**
 * Auto-clusters candidate photos into meaningful contextual groups.
 */
export function generateDisambiguationClusters(candidatePhotos: PhotoRecord[]): DisambiguationCluster[] {
  if (candidatePhotos.length < 3) return [];

  const clusters: DisambiguationCluster[] = [];

  // 1. Group by Major Scenes
  const sceneBuckets = new Map<string, PhotoRecord[]>();
  candidatePhotos.forEach(p => {
    p.scenes.forEach(scene => {
      const arr = sceneBuckets.get(scene) || [];
      arr.push(p);
      sceneBuckets.set(scene, arr);
    });
  });

  sceneBuckets.forEach((photos, scene) => {
    if (photos.length >= 2 && photos.length < candidatePhotos.length) {
      clusters.push({
        id: `cluster-scene-${scene.toLowerCase().replace(/\s+/g, '-')}`,
        title: scene,
        subtitle: `${photos.length} photos`,
        category: 'scene',
        photoCount: photos.length,
        representativePhoto: photos[0],
        photos,
        filterValue: scene,
        facetType: 'scene'
      });
    }
  });

  // 2. Group by Burst Groups / Sub-Events
  const burstBuckets = new Map<string, PhotoRecord[]>();
  candidatePhotos.forEach(p => {
    if (p.visualCharacteristics.burstGroupId) {
      const arr = burstBuckets.get(p.visualCharacteristics.burstGroupId) || [];
      arr.push(p);
      burstBuckets.set(p.visualCharacteristics.burstGroupId, arr);
    }
  });

  burstBuckets.forEach((photos, burstId) => {
    if (photos.length >= 2 && photos.length < candidatePhotos.length) {
      const title = photos[0].subEvent || photos[0].eventContext[0] || 'Burst Sequence';
      clusters.push({
        id: `cluster-burst-${burstId}`,
        title: title.length > 25 ? title.slice(0, 23) + '...' : title,
        subtitle: `${photos.length} burst shots`,
        category: 'burst',
        photoCount: photos.length,
        representativePhoto: photos[0],
        photos,
        filterValue: photos[0].subEvent || burstId,
        facetType: 'event'
      });
    }
  });

  // 3. Group by Time of Day
  const timeBuckets = new Map<TimeOfDay, PhotoRecord[]>();
  candidatePhotos.forEach(p => {
    const arr = timeBuckets.get(p.timeOfDay) || [];
    arr.push(p);
    timeBuckets.set(p.timeOfDay, arr);
  });

  timeBuckets.forEach((photos, tod) => {
    if (photos.length >= 2 && photos.length < candidatePhotos.length && (tod === 'night' || tod === 'evening')) {
      const title = tod === 'night' ? 'Night Moments' : 'Evening & Sunset';
      clusters.push({
        id: `cluster-tod-${tod}`,
        title,
        subtitle: `${photos.length} photos`,
        category: 'timeOfDay',
        photoCount: photos.length,
        representativePhoto: photos[0],
        photos,
        filterValue: tod,
        facetType: 'timeOfDay'
      });
    }
  });

  // Sort clusters by photo count descending and take top 6
  return clusters
    .sort((a, b) => b.photoCount - a.photoCount)
    .slice(0, 6);
}
