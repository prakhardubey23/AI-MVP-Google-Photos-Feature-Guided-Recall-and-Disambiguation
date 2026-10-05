import { QueryAnalysisResult, ParsedMemoryEntities, QueryStateType } from '../types/photo';

const GROQ_API_KEY = (import.meta as any).env?.VITE_GROQ_API_KEY ||
  (typeof window !== 'undefined' && (window as any)?.__GROQ_API_KEY__) || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL_NAME = 'llama-3.3-70b-versatile';

// Authoritative Corpus Summary Grounded in Real Project Photos
const CORPUS_GROUNDING_SUMMARY = `
The photo library contains authentic personal photos spanning 2014 to 2023:
1. India vs Sri Lanka T20 Cricket Match (Jan 2020, Holkar Stadium Indore): Match under bright floodlights, fans in stands with tricolor face paint, stadium giant screen & scoreboard (07.01.20), green pitch view and boundary ropes, pavilion views.
2. MBA Batch Graduation & Convocation (Mar 2023, Pune): Cohort formal group photo in black suits and blazers on grand building stairs with professors seated in front.
3. MBA Classroom Lecture Hall (Mar 2023, Pune): Class group photo inside tiered auditorium lecture hall with professor in pink shirt and classmates in wooden desks.
4. Birthday Celebration Brownie for Gunjan (Mar 2023): Chocolate brownie pastry dessert plate with lit candle and chocolate sauce lettering "HAPPY BIRTHDAY GUNJAN".
5. Savitribai Phule Pune University Certificate (Mar 2023): Official SPPU Migration Certificate document for Prakhar Dubey.
6. Siberian Husky Dog on Bed with Laptop (Jun 2021): Man relaxing in bed with a fluffy Siberian Husky dog lying beside a MacBook laptop watching videos.
7. MMA & Kickboxing Gym Training (Dec 2022): Martial arts gym/dojo with red boxing gloves, hanging heavy punching bags, workout mats, battle ropes.
8. Art of Living Ashram (Feb 2022, Bangalore): Spiritual satsang gathering with Sri Sri Ravi Shankar; illuminated amphitheater & musical fountain light show at night.
9. Vintage Childhood Photo Prints (Scanned Aug 2023): Boy in red polo & girl in white turtleneck in flower garden; same kids in tea plantation estate hills; kids riding a decorated yak at snow-covered Tsomgo Lake in Sikkim.
10. College Convocation Ceremony (Apr 2020): Graduates on stage in black convocation gowns and graduation caps with faculty.
11. Friends Rooftop Night Out (Apr 2020): 5 friends group photo having beer and drinks at open-air rooftop bar at night.
12. Friends Pool Party & Getaway (Jul 2020): Swimming in resort pool with drinks; group selfie; mirror selfie with rose gold iPhone; party on stairs with hookah; beach shack in yellow/white kurtas; misty forest hike.
13. Beach Shack Night Cafe with LED Crown (Mar 2023): Woman wearing light-up purple LED flower headband at outdoor beach shack dining table with menus.
14. Live Music Concert (Nov 2022): Large crowd cheering at music festival with dazzling stage light beams.
15. Vintage Babli Baby Photo (Nov 2022): Childhood vintage photo print of mother holding baby labeled "Babli".
16. Historic White Dome Monument (Dec 2014) & Rocky Coastal Bay (Dec 2014).
17. Scenic Reservoir Lake with Forest Hills (May 2017).
18. Mehendi Celebration (Apr 2020): Hands with intricate henna patterns.
19. College Ethnic Day (Feb 2022): Young women in traditional sarees in college corridor.
`;

export async function analyzeQueryWithGroq(query: string): Promise<QueryAnalysisResult> {
  const trimmed = query.trim();

  // Fast offline guardrails for common non-photo queries
  const lower = trimmed.toLowerCase();
  const nonPhotoTriggers = [
    'who is prime minister', 'write an email', 'what is the capital', 'recipe for',
    'write a poem', 'solve equation', 'system prompt', 'delete all', 'weather in',
    'write code', 'javascript function', 'how many kilometers'
  ];
  if (nonPhotoTriggers.some(t => lower.includes(t))) {
    return {
      state: 'STATE_B',
      isPhotoQuery: false,
      confidence: 0.99,
      reasoning: 'Non-photo task or general knowledge question.',
      parsedEntities: createEmptyEntities(),
      conversationalSummary: 'I can help you find photos from your library. Try describing a memory, place, event, object, or approximate time.',
      suggestedAlternativeSearches: [
        'Cricket match at Holkar stadium',
        'Husky dog lying on bed with laptop',
        'MBA graduation photo on college stairs'
      ]
    };
  }

  // System Prompt for Groq LLM
  const systemPrompt = `
You are the AI Assistant inside Google Photos on iOS specializing in vague-memory photo retrieval.
You analyze user queries about their photos and output STRICT JSON format.

Corpus Grounding (The only source of truth):
${CORPUS_GROUNDING_SUMMARY}

Rules:
1. NEVER invent fictional people names like Rahul, Aman, Priya, Rohan. The only named persons in the library are Prakhar Dubey (migration certificate), Gunjan (birthday brownie), Sri Sri Ravi Shankar (ashram satsang), and Babli (vintage photo note).
2. NEVER fabricate photos or hallucinate matches that do not exist.
3. Determine if the query is a photo-retrieval query (isPhotoQuery: true/false).
4. Assign the state:
   - "STATE_A": Valid photo query that matches events, places, objects, or scenes in the corpus.
   - "STATE_B": Unrelated non-photo query (e.g. general knowledge, math, email writing, programming).
   - "STATE_C": Valid photo query for subjects that definitely do not exist in the library (e.g., Eiffel Tower, Paris, snow skiing in Alps, celebrities like Elon Musk, Taj Mahal).
   - "STATE_D": Valid photo query that is broad or ambiguous (e.g. "friends", "graduation", "vacation", "photos at night", "sports").
5. Extract parsedEntities (events, people, locations, scenes, activities, objects, timeRange).
6. Generate a warm, concise conversational summary (1-2 sentences) in Google Photos Ask Photos style.

Output JSON format ONLY:
{
  "state": "STATE_A" | "STATE_B" | "STATE_C" | "STATE_D",
  "isPhotoQuery": boolean,
  "confidence": number,
  "reasoning": string,
  "parsedEntities": {
    "events": string[],
    "people": string[],
    "locations": string[],
    "timeRange": { "approxYear": number | null, "timeOfDay": "morning" | "afternoon" | "evening" | "night" | null },
    "scenes": string[],
    "activities": string[],
    "objects": string[],
    "rawClues": string[]
  },
  "conversationalSummary": string,
  "suggestedAlternativeSearches": string[],
  "disambiguationPrompt": string
}
`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      console.warn('Groq API returned non-OK status:', response.status);
      return localFallbackParser(query);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return localFallbackParser(query);
    }

    const parsed = JSON.parse(content) as QueryAnalysisResult;
    return parsed;
  } catch (err) {
    console.warn('Groq API call failed. Falling back to local intelligence parser:', err);
    return localFallbackParser(query);
  }
}

function createEmptyEntities(): ParsedMemoryEntities {
  return {
    events: [],
    people: [],
    locations: [],
    scenes: [],
    activities: [],
    objects: [],
    rawClues: []
  };
}

/**
 * Deterministic fallback parser matching actual local corpus.
 */
export function localFallbackParser(query: string): QueryAnalysisResult {
  const lower = query.toLowerCase();

  // State B Check: Non-photo queries
  const nonPhotoWords = [
    'prime minister', 'president', 'capital of', 'write an email', 'recipe',
    'poem', 'essay', 'calculate', 'weather', 'programming', 'how to', 'how do i',
    'what is the', 'bake a cake', 'tell me a joke', 'solve'
  ];
  if (nonPhotoWords.some(w => lower.includes(w))) {
    return {
      state: 'STATE_B',
      isPhotoQuery: false,
      confidence: 0.95,
      reasoning: 'Non-photo query detected.',
      parsedEntities: createEmptyEntities(),
      conversationalSummary: 'I can help you find photos from your library. Try describing a memory, place, event, pet, object or approximate time.',
      suggestedAlternativeSearches: [
        'Cricket match at Holkar stadium',
        'Husky dog on bed with laptop',
        'MBA graduation on college stairs'
      ]
    };
  }

  // State C Check: Explicit out-of-corpus queries
  const outOfCorpusWords = ['eiffel', 'paris', 'london', 'tokyo', 'new york', 'snowboarding', 'elon musk', 'messi', 'ronaldo', 'taj mahal', 'pyramids', 'skiing'];
  if (outOfCorpusWords.some(w => lower.includes(w))) {
    return {
      state: 'STATE_C',
      isPhotoQuery: true,
      confidence: 0.95,
      reasoning: 'Subject does not exist in demo library.',
      parsedEntities: createEmptyEntities(),
      conversationalSummary: "I couldn't find a matching photo in your current library. This MVP uses a curated demo photo collection.",
      suggestedAlternativeSearches: [
        'Cricket match at Holkar stadium',
        'Husky dog lying on bed with laptop',
        'Childhood yak ride at snow lake in Sikkim'
      ]
    };
  }

  // Extract real entities & clues
  const entities: ParsedMemoryEntities = {
    events: [],
    people: [],
    locations: [],
    scenes: [],
    activities: [],
    objects: [],
    rawClues: []
  };

  // Real Named Entities
  if (lower.includes('gunjan')) entities.people.push('Gunjan');
  if (lower.includes('prakhar')) entities.people.push('Prakhar Dubey');
  if (lower.includes('ravi shankar') || lower.includes('gurudev')) entities.people.push('Sri Sri Ravi Shankar');
  if (lower.includes('babli')) entities.people.push('Babli');

  // Events
  if (lower.includes('cricket') || lower.includes('holkar') || lower.includes('match') || lower.includes('t20')) {
    entities.events.push('Cricket Match');
    entities.scenes.push('Cricket Stadium');
    entities.objects.push('Floodlights');
  }
  if (lower.includes('graduation') || lower.includes('convocation') || lower.includes('cohort') || lower.includes('batch')) {
    entities.events.push('Graduation');
    entities.scenes.push('College Steps');
  }
  if (lower.includes('classroom') || lower.includes('lecture') || lower.includes('auditorium') || lower.includes('professor')) {
    entities.scenes.push('Classroom');
    entities.scenes.push('Lecture Hall');
  }
  if (lower.includes('birthday') || lower.includes('brownie') || lower.includes('cake') || lower.includes('candle')) {
    entities.events.push('Birthday Celebration');
    entities.objects.push('Chocolate Brownie');
    entities.objects.push('Lit Birthday Candle');
  }
  if (lower.includes('husky') || lower.includes('dog') || lower.includes('pet') || lower.includes('laptop') || lower.includes('macbook')) {
    entities.objects.push('Siberian Husky Dog');
    entities.objects.push('MacBook Laptop');
    entities.scenes.push('Bedroom');
  }
  if (lower.includes('mma') || lower.includes('kickboxing') || lower.includes('boxing') || lower.includes('punching') || lower.includes('gym') || lower.includes('dojo') || lower.includes('gloves')) {
    entities.events.push('MMA Training');
    entities.scenes.push('MMA Gym');
    entities.objects.push('Red Boxing Gloves');
    entities.objects.push('Heavy Punching Bags');
  }
  if (lower.includes('ashram') || lower.includes('fountain') || lower.includes('art of living') || lower.includes('satsang')) {
    entities.events.push('Art of Living');
    entities.scenes.push('Musical Fountain');
    entities.scenes.push('Ashram');
  }
  if (lower.includes('yak') || lower.includes('tsomgo') || lower.includes('sikkim')) {
    entities.events.push('Childhood Yak Ride');
    entities.scenes.push('Alpine Lake');
    entities.objects.push('Decorated Yak');
  }
  if (lower.includes('tea') || lower.includes('plantation')) {
    entities.scenes.push('Tea Garden');
  }
  if (lower.includes('pool') || lower.includes('swimming')) {
    entities.scenes.push('Swimming Pool');
    entities.events.push('Pool Party');
  }
  if (lower.includes('rooftop') || lower.includes('beer') || lower.includes('bar')) {
    entities.scenes.push('Rooftop Bar');
  }
  if (lower.includes('concert') || lower.includes('festival') || lower.includes('music')) {
    entities.scenes.push('Concert Arena');
    entities.events.push('Live Music Concert');
  }
  if (lower.includes('headband') || lower.includes('crown') || lower.includes('led') || lower.includes('shack')) {
    entities.scenes.push('Beach Shack');
    entities.objects.push('Purple Glowing LED Headband');
  }
  if (lower.includes('mehendi') || lower.includes('henna')) {
    entities.events.push('Mehendi Celebration');
    entities.objects.push('Mehendi Hands');
  }
  if (lower.includes('selfie')) {
    entities.scenes.push('Selfie');
  }

  // Locations
  if (lower.includes('indore')) entities.locations.push('Indore');
  if (lower.includes('bangalore') || lower.includes('bengaluru')) entities.locations.push('Bengaluru');
  if (lower.includes('pune')) entities.locations.push('Pune');
  if (lower.includes('sikkim')) entities.locations.push('Sikkim');

  // Time of Day
  if (lower.includes('night') || lower.includes('floodlight') || lower.includes('dark')) {
    entities.timeRange = { timeOfDay: 'night' };
  } else if (lower.includes('evening') || lower.includes('sunset')) {
    entities.timeRange = { timeOfDay: 'evening' };
  } else if (lower.includes('morning') || lower.includes('sunrise')) {
    entities.timeRange = { timeOfDay: 'morning' };
  }

  // Broad Query Check (State D)
  const isBroad = (
    lower === 'photos' ||
    lower === 'friends' ||
    lower === 'vacation' ||
    lower === 'trips' ||
    lower === 'graduation' ||
    lower === 'all photos' ||
    lower === 'party' ||
    lower === 'outdoor'
  );

  const state: QueryStateType = isBroad ? 'STATE_D' : 'STATE_A';

  const summary = isBroad
    ? `Found several photos matching "${query}". Which specific event or setting are you looking for?`
    : `Found matching photos for "${query}" from your photo library.`;

  return {
    state,
    isPhotoQuery: true,
    confidence: 0.9,
    reasoning: 'Grounded entity match against local corpus.',
    parsedEntities: entities,
    conversationalSummary: summary,
    disambiguationPrompt: isBroad ? 'Can you narrow down the specific moment or setting?' : undefined,
    suggestedAlternativeSearches: [
      'Cricket match at Holkar stadium',
      'Husky dog lying on bed with laptop',
      'MBA batch graduation photo on stairs'
    ]
  };
}
