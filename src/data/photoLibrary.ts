import { PhotoRecord } from '../types/photo';

const RAW_PHOTO_LIBRARY: PhotoRecord[] = [
  // =========================================================================
  // 1. 201412_a: Heritage Architecture & Coastal Landscape (Dec 2014)
  // =========================================================================
  {
    id: 'photo-201412-01',
    filePath: '201412_a/HZNB4190.JPG',
    fileName: 'HZNB4190.JPG',
    url: '/201412_a/HZNB4190.JPG',
    timestamp: '2014-12-14T15:30:00Z',
    dateDisplay: 'Dec 14, 2014',
    year: 2014,
    month: 12,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Heritage Monument',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Historical Monument Visit', 'Heritage Architecture', 'Sightseeing'],
    subEvent: 'White Dome Heritage Monument',
    people: [],
    scenes: ['Monument', 'Architecture', 'Dome', 'Heritage Site', 'Outdoor'],
    activities: ['Sightseeing', 'Architecture Photography'],
    objects: ['White Dome', 'Heritage Structure', 'Spire', 'Blue Sky', 'Stone Architecture'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['white', 'blue', 'stone'],
      aspectRatio: 0.75
    },
    caption: 'Historic white dome monument and traditional stone architecture against a clear blue sky.',
    memoryStory: 'Exploring historical heritage monuments and admiring the classic dome architecture during winter travels.'
  },
  {
    id: 'photo-201412-02',
    filePath: '201412_a/IYVQE1364.JPG',
    fileName: 'IYVQE1364.JPG',
    url: '/201412_a/IYVQE1364.JPG',
    timestamp: '2014-12-14T17:15:00Z',
    dateDisplay: 'Dec 14, 2014',
    year: 2014,
    month: 12,
    timeOfDay: 'evening',
    location: {
      placeName: 'Rocky Coastal Bay',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Coastal Walk', 'Nature Exploration', 'Cliff Viewpoint'],
    subEvent: 'Rocky Cliffs & Coastal Mangrove Bay',
    people: [],
    scenes: ['Coast', 'Cliffs', 'Bay', 'Ocean', 'Rocky Shore', 'Nature', 'Outdoor'],
    activities: ['Sightseeing', 'Nature Walk', 'Landscape Photography'],
    objects: ['Red Rock Cliffs', 'Tropical Trees', 'Sea Water', 'Bay', 'Rocky Shoreline'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['red', 'green', 'blue'],
      aspectRatio: 1.33
    },
    caption: 'Scenic view of rocky red soil cliffs overlooking a tropical ocean bay and green foliage.',
    memoryStory: 'Looking out over the rugged coastline and coastal bay during a late afternoon walk.'
  },

  // =========================================================================
  // 2. 201705_a: Lake Reservoir & Hill Forest (May 2017)
  // =========================================================================
  {
    id: 'photo-201705-01',
    filePath: '201705_a/IMG_2192.JPG',
    fileName: 'IMG_2192.JPG',
    url: '/201705_a/IMG_2192.JPG',
    timestamp: '2017-05-22T16:20:00Z',
    dateDisplay: 'May 22, 2017',
    year: 2017,
    month: 5,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Reservoir Lake Shore',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Lake Nature Walk', 'Hill Station Outing', 'Reservoir Visit'],
    subEvent: 'Walking along the Reservoir Lake Shore',
    people: [],
    scenes: ['Lake', 'Reservoir', 'Forest', 'Hills', 'Nature', 'Outdoor'],
    activities: ['Walking by Lake', 'Nature Walk', 'Landscape Photography'],
    objects: ['Lake Water', 'Red Soil Shoreline', 'Lush Green Trees', 'Hills', 'Person Walking'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['green', 'red-brown', 'blue'],
      aspectRatio: 1.33
    },
    caption: 'Scenic reservoir lake with red soil shoreline and lush green hill forest, person walking along the water.',
    memoryStory: 'Quiet afternoon walk along the tranquil lake reservoir surrounded by dense forest hills.'
  },

  // =========================================================================
  // 3. 202001_a: India vs Sri Lanka T20 Match at Holkar Stadium Indore (Jan 7, 2020)
  // =========================================================================
  {
    id: 'photo-202001-01',
    filePath: '202001_a/CUJO7411.JPG',
    fileName: 'CUJO7411.JPG',
    url: '/202001_a/CUJO7411.JPG',
    timestamp: '2020-01-07T19:30:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Fans in Stands with Face Paint',
    people: [],
    scenes: ['Cricket Stadium', 'Stadium Stands', 'Sports Arena', 'Night Match'],
    activities: ['Watching Cricket', 'Cheering in Stands', 'Live Sports'],
    objects: ['Tricolor Face Paint', 'Spectators', 'Stadium Floodlights', 'Stands'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['blue', 'green', 'night'],
      aspectRatio: 0.75
    },
    caption: 'Cricket fans with Indian tricolor face paint cheering in the stands during India vs Sri Lanka T20 at Holkar Stadium.',
    memoryStory: 'Electric atmosphere in the Indore stadium cheering for Team India under the glowing floodlights.'
  },
  {
    id: 'photo-202001-02',
    filePath: '202001_a/EXBU5915.JPG',
    fileName: 'EXBU5915.JPG',
    url: '/202001_a/EXBU5915.JPG',
    timestamp: '2020-01-07T19:45:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Stadium Giant Screen & Scoreboard (Indore 07.01.20)',
    people: [],
    scenes: ['Cricket Stadium', 'Scoreboard Screen', 'Sports Arena', 'Night Match'],
    activities: ['Watching Scoreboard', 'Cricket Match'],
    objects: ['Stadium Screen', 'Scoreboard', 'Date 07.01.20', 'Floodlight Tower', 'Stadium Stands'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['dark', 'white', 'bright'],
      aspectRatio: 0.75
    },
    caption: 'Holkar Stadium giant screen and electronic scoreboard showing match details on 07.01.20 in Indore.',
    memoryStory: 'Looking at the giant stadium screen during the 2nd T20 international match in Indore.'
  },
  {
    id: 'photo-202001-03',
    filePath: '202001_a/FQNR0182.JPG',
    fileName: 'FQNR0182.JPG',
    url: '/202001_a/FQNR0182.JPG',
    timestamp: '2020-01-07T20:10:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Pitch View and Boundary Ropes under Floodlights',
    people: [],
    scenes: ['Cricket Stadium', 'Cricket Ground', 'Pitch View', 'Night Match'],
    activities: ['Watching Cricket Pitch', 'Live Match'],
    objects: ['Cricket Pitch', 'Green Outfield', 'Boundary Rope', 'Floodlights', 'Advertising Boards'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['green', 'bright', 'blue'],
      aspectRatio: 0.75
    },
    caption: 'View of the lush green cricket ground and pitch illuminated under powerful stadium floodlights.',
    memoryStory: 'Vibrant green outfield and floodlit pitch at Holkar Stadium during the T20 match.'
  },
  {
    id: 'photo-202001-04',
    filePath: '202001_a/HJUV7471.JPG',
    fileName: 'HJUV7471.JPG',
    url: '/202001_a/HJUV7471.JPG',
    timestamp: '2020-01-07T20:30:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Match Action and Stadium Panorama',
    people: [],
    scenes: ['Cricket Stadium', 'Sports Arena', 'Night Match', 'Stadium Crowd'],
    activities: ['Cheering', 'Live Sports Spectating'],
    objects: ['Stadium Seating', 'Packed Crowd', 'Floodlights', 'Ground'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['blue', 'dark', 'bright'],
      aspectRatio: 0.75
    },
    caption: 'Packed stadium stands and bright floodlight towers during India vs Sri Lanka T20 match.',
    memoryStory: 'The roar of the crowd echoed across Indore stadium as the match reached the middle overs.'
  },
  {
    id: 'photo-202001-05',
    filePath: '202001_a/JLXM5088.JPG',
    fileName: 'JLXM5088.JPG',
    url: '/202001_a/JLXM5088.JPG',
    timestamp: '2020-01-07T20:45:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Cheering Fans in Seating Bay',
    people: [],
    scenes: ['Cricket Stadium', 'Stadium Stands', 'Night Event'],
    activities: ['Cheering', 'Watching Match'],
    objects: ['Spectators', 'Stadium Railing', 'Floodlights'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['blue', 'dark', 'light'],
      aspectRatio: 0.75
    },
    caption: 'Spectators cheering from the upper stands during the cricket match at Holkar Stadium.',
    memoryStory: 'Fans waving and celebrating boundaries under the Indore stadium lights.'
  },
  {
    id: 'photo-202001-06',
    filePath: '202001_a/SKRJ8604.JPG',
    fileName: 'SKRJ8604.JPG',
    url: '/202001_a/SKRJ8604.JPG',
    timestamp: '2020-01-07T21:00:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Wide Stadium Bowl and Pavilion View',
    people: [],
    scenes: ['Cricket Stadium', 'Stadium Bowl', 'Night Arena'],
    activities: ['Watching Cricket', 'Match Night'],
    objects: ['Pavilion', 'Floodlights', 'Cricket Field', 'Stadium Bowl'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['green', 'dark', 'white'],
      aspectRatio: 0.75
    },
    caption: 'Wide-angle view of Holkar Stadium bowl, cricket pitch and bright light towers at night.',
    memoryStory: 'Spectacular wide view of the entire cricket stadium bathed in floodlights.'
  },
  {
    id: 'photo-202001-07',
    filePath: '202001_a/VGCS9821.JPG',
    fileName: 'VGCS9821.JPG',
    url: '/202001_a/VGCS9821.JPG',
    timestamp: '2020-01-07T21:15:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Cricket Fans Celebrating in Stands',
    people: [],
    scenes: ['Cricket Stadium', 'Stadium Stands', 'Night Match'],
    activities: ['Cheering', 'Celebrating Victory'],
    objects: ['Crowd', 'Stadium Seating', 'Floodlights'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['blue', 'dark', 'bright'],
      aspectRatio: 0.75
    },
    caption: 'Crowd celebrating and cheering in the stadium stands as India chases the target.',
    memoryStory: 'Unstoppable energy in the stadium stands during India’s chase against Sri Lanka.'
  },
  {
    id: 'photo-202001-08',
    filePath: '202001_a/VODK5732.JPG',
    fileName: 'VODK5732.JPG',
    url: '/202001_a/VODK5732.JPG',
    timestamp: '2020-01-07T21:30:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Stadium Floodlight Mast and Seating',
    people: [],
    scenes: ['Cricket Stadium', 'Sports Arena', 'Night Match'],
    activities: ['Watching Cricket'],
    objects: ['Towering Floodlights', 'Stands', 'Cricket Field'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['bright', 'dark', 'green'],
      aspectRatio: 0.75
    },
    caption: 'Towering floodlight mast illuminating the packed cricket stadium in Indore.',
    memoryStory: 'Gazing up at the massive light towers lighting up the night sky at Holkar Stadium.'
  },
  {
    id: 'photo-202001-09',
    filePath: '202001_a/WMJM5626.JPG',
    fileName: 'WMJM5626.JPG',
    url: '/202001_a/WMJM5626.JPG',
    timestamp: '2020-01-07T21:45:00Z',
    dateDisplay: 'Jan 7, 2020',
    year: 2020,
    month: 1,
    timeOfDay: 'night',
    location: {
      city: 'Indore',
      placeName: 'Holkar Cricket Stadium MPCA',
      state: 'Madhya Pradesh',
      country: 'India'
    },
    eventContext: ['India vs Sri Lanka T20 Match', 'Holkar Stadium Match', 'Cricket Match Live'],
    subEvent: 'Final Overs of the T20 Match',
    people: [],
    scenes: ['Cricket Stadium', 'Sports Arena', 'Night Match'],
    activities: ['Watching Cricket', 'Match Celebration'],
    objects: ['Cricket Ground', 'Floodlights', 'Crowd'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'cricket-202001',
      dominantColors: ['green', 'blue', 'bright'],
      aspectRatio: 0.75
    },
    caption: 'Final overs of India vs Sri Lanka T20 at Holkar Stadium with stadium fully lit.',
    memoryStory: 'Memorable night in Indore watching India secure a 7-wicket win over Sri Lanka.'
  },

  // =========================================================================
  // 4. 202004_a: Mehendi, Convocation Stage, Rooftop Night Out (Apr 2020)
  // =========================================================================
  {
    id: 'photo-202004-01',
    filePath: '202004_a/DGLI5000.JPG',
    fileName: 'DGLI5000.JPG',
    url: '/202004_a/DGLI5000.JPG',
    timestamp: '2020-04-10T14:15:00Z',
    dateDisplay: 'Apr 10, 2020',
    year: 2020,
    month: 4,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Traditional Celebration',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Mehendi Celebration', 'Traditional Celebration', 'Family Moment'],
    subEvent: 'Hands with Intricate Mehendi / Henna Patterns',
    people: [],
    scenes: ['Indoor', 'Celebration', 'Portrait'],
    activities: ['Mehendi Celebration', 'Posing with Henna'],
    objects: ['Mehendi Hands', 'Henna Designs', 'Traditional Clothes'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['brown', 'warm', 'skin-tone'],
      aspectRatio: 0.75
    },
    caption: 'Smiling young man with hands showing intricate mehendi / henna patterns during a celebration.',
    memoryStory: 'Festive mehendi day with detailed traditional henna patterns.'
  },
  {
    id: 'photo-202004-02',
    filePath: '202004_a/GOYJ0493.JPG',
    fileName: 'GOYJ0493.JPG',
    url: '/202004_a/GOYJ0493.JPG',
    timestamp: '2020-04-12T11:00:00Z',
    dateDisplay: 'Apr 12, 2020',
    year: 2020,
    month: 4,
    timeOfDay: 'morning',
    location: {
      placeName: 'University Auditorium Stage',
      state: 'India',
      country: 'India'
    },
    eventContext: ['College Convocation', 'Graduation Ceremony', 'Academic Degree Award'],
    subEvent: 'Convocation Stage with Black Gowns & Caps',
    people: [],
    scenes: ['Auditorium Stage', 'Convocation Ceremony', 'Formal Event'],
    activities: ['Graduation Ceremony', 'Receiving Degrees', 'Convocation'],
    objects: ['Black Convocation Gowns', 'Graduation Caps', 'Stage Backdrop', 'Dignitaries Seated'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['black', 'gold', 'red'],
      aspectRatio: 1.33
    },
    caption: 'College Convocation ceremony on auditorium stage, graduates in black convocation gowns and caps with faculty.',
    memoryStory: 'Formal college convocation day celebrating graduation with black gowns and caps on stage.'
  },
  {
    id: 'photo-202004-03',
    filePath: '202004_a/KFHT3875.JPG',
    fileName: 'KFHT3875.JPG',
    url: '/202004_a/KFHT3875.JPG',
    timestamp: '2020-04-18T21:30:00Z',
    dateDisplay: 'Apr 18, 2020',
    year: 2020,
    month: 4,
    timeOfDay: 'night',
    location: {
      placeName: 'Rooftop Bar & Lounge',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Rooftop Night Out', 'Friends Gathering', 'Drinks with Friends'],
    subEvent: 'Group of 5 Friends at Rooftop Bar',
    people: [],
    scenes: ['Rooftop Bar', 'Restaurant', 'Night Out', 'Outdoor Deck'],
    activities: ['Dining', 'Drinks', 'Night Out', 'Social Gathering'],
    objects: ['Beer Bottles', 'Drinks', 'Rooftop Table', 'Night Lights', 'City Backdrop'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['dark', 'amber', 'warm'],
      aspectRatio: 1.33
    },
    caption: 'Five friends enjoying drinks and beer at an open-air rooftop bar and lounge at night.',
    memoryStory: 'Relaxing night out with friends on the rooftop deck with cold drinks and city breeze.'
  },

  // =========================================================================
  // 5. 202007_a: Pool Party, Beach Shack, Hookah, Forest Hike, Mirror Selfie (Jul 2020)
  // =========================================================================
  {
    id: 'photo-202007-01',
    filePath: '202007_a/BYWL0461.JPG',
    fileName: 'BYWL0461.JPG',
    url: '/202007_a/BYWL0461.JPG',
    timestamp: '2020-07-05T15:20:00Z',
    dateDisplay: 'Jul 5, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Outdoors',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Friends Gathering', 'Day Out', 'Group Photo'],
    subEvent: 'Group Selfie Outdoors with Friends',
    people: [],
    scenes: ['Outdoor', 'Selfie', 'Daylight'],
    activities: ['Taking Group Selfie', 'Hanging Out'],
    objects: ['Smiles', 'Casual Clothes', 'Trees'],
    visualCharacteristics: {
      isSelfie: true,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['green', 'warm', 'skin-tone'],
      aspectRatio: 0.75
    },
    caption: 'Group selfie of friends smiling together outdoors in casual clothes.',
    memoryStory: 'Spontaneous group selfie with friends enjoying a sunny day outdoors.'
  },
  {
    id: 'photo-202007-02',
    filePath: '202007_a/FRJA2367.JPG',
    fileName: 'FRJA2367.JPG',
    url: '/202007_a/FRJA2367.JPG',
    timestamp: '2020-07-12T14:40:00Z',
    dateDisplay: 'Jul 12, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Resort Swimming Pool',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Pool Party', 'Swimming with Friends', 'Weekend Getaway'],
    subEvent: 'Swimming & Splashing in the Pool with Drinks',
    people: [],
    scenes: ['Swimming Pool', 'Resort', 'Poolside', 'Outdoor'],
    activities: ['Swimming', 'Pool Party', 'Splashing', 'Relaxing in Pool'],
    objects: ['Pool Water', 'Swimwear', 'Drinks', 'Sunglasses', 'Pool Edge'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'pool-party-202007',
      dominantColors: ['blue', 'aqua', 'sunlight'],
      aspectRatio: 0.75
    },
    caption: 'Friends enjoying a fun pool party, swimming and relaxing in the resort pool with drinks.',
    memoryStory: 'Cooling off on a hot summer afternoon at the resort swimming pool with friends.'
  },
  {
    id: 'photo-202007-03',
    filePath: '202007_a/SPJW2325.JPG',
    fileName: 'SPJW2325.JPG',
    url: '/202007_a/SPJW2325.JPG',
    timestamp: '2020-07-12T15:00:00Z',
    dateDisplay: 'Jul 12, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Resort Swimming Pool',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Pool Party', 'Swimming with Friends', 'Weekend Getaway'],
    subEvent: 'Posing in the Swimming Pool Water',
    people: [],
    scenes: ['Swimming Pool', 'Resort', 'Poolside', 'Outdoor'],
    activities: ['Swimming', 'Pool Party', 'Posing in Water'],
    objects: ['Turquoise Pool Water', 'Pool Wall', 'Drinks'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'pool-party-202007',
      dominantColors: ['aqua', 'blue', 'white'],
      aspectRatio: 0.75
    },
    caption: 'Posing in the turquoise swimming pool water during the friends pool party.',
    memoryStory: 'Fun poolside memories splashing around in the resort swimming pool.'
  },
  {
    id: 'photo-202007-04',
    filePath: '202007_a/IMG_2638.JPG',
    fileName: 'IMG_2638.JPG',
    url: '/202007_a/IMG_2638.JPG',
    timestamp: '2020-07-16T18:10:00Z',
    dateDisplay: 'Jul 16, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'evening',
    location: {
      placeName: 'Indoor / Bedroom',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Casual Outfit', 'Daily Life', 'Mirror Selfie'],
    subEvent: 'Mirror Selfie with Rose Gold iPhone',
    people: [],
    scenes: ['Indoor', 'Bedroom', 'Mirror'],
    activities: ['Mirror Selfie', 'Outfit Check'],
    objects: ['Rose Gold iPhone', 'Mirror', 'Casual Outfit'],
    visualCharacteristics: {
      isSelfie: true,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['neutral', 'rose-gold', 'white'],
      aspectRatio: 0.75
    },
    caption: 'Mirror selfie taken with a rose gold iPhone in front of bedroom mirror.',
    memoryStory: 'Quick mirror selfie check before heading out.'
  },
  {
    id: 'photo-202007-05',
    filePath: '202007_a/SKUS4073.JPG',
    fileName: 'SKUS4073.JPG',
    url: '/202007_a/SKUS4073.JPG',
    timestamp: '2020-07-20T22:30:00Z',
    dateDisplay: 'Jul 20, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'night',
    location: {
      placeName: 'House Party Lounge',
      state: 'India',
      country: 'India'
    },
    eventContext: ['House Party', 'Hookah Night', 'Friends Night In'],
    subEvent: 'Friends on Stairs with Hookah & Party Lights',
    people: [],
    scenes: ['Indoor Party', 'Stairs', 'Night Party', 'Lounge'],
    activities: ['House Party', 'Hookah Session', 'Late Night Hangout'],
    objects: ['Hookah / Shisha', 'Party Lighting', 'Indoor Staircase', 'Cushions'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['purple', 'dark', 'magenta'],
      aspectRatio: 0.75
    },
    caption: 'Friends hanging out on the stairs with hookah and colorful ambient party lighting at night.',
    memoryStory: 'Late night house party sitting on the staircase with ambient disco lights and hookah.'
  },
  {
    id: 'photo-202007-06',
    filePath: '202007_a/UGAR6433.JPG',
    fileName: 'UGAR6433.JPG',
    url: '/202007_a/UGAR6433.JPG',
    timestamp: '2020-07-25T13:45:00Z',
    dateDisplay: 'Jul 25, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Beach Shack Cafe',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Beach Shack Dining', 'Trip with Friends', 'Ethnic Kurtas Outing'],
    subEvent: 'Friends at Beach Shack in White & Yellow Kurtas',
    people: [],
    scenes: ['Beach Shack', 'Cafe', 'Outdoor Restaurant', 'Daylight'],
    activities: ['Dining', 'Hanging Out', 'Group Photo'],
    objects: ['White Kurta', 'Yellow Kurta', 'Wooden Shack Tables', 'Thatched Roof'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['white', 'yellow', 'wood'],
      aspectRatio: 1.33
    },
    caption: 'Group of friends sitting together at open-air beach shack cafe dressed in white and yellow ethnic kurtas.',
    memoryStory: 'Relaxed afternoon lunch at the rustic beach shack cafe wearing matching kurtas.'
  },
  {
    id: 'photo-202007-07',
    filePath: '202007_a/VBLE2079.JPG',
    fileName: 'VBLE2079.JPG',
    url: '/202007_a/VBLE2079.JPG',
    timestamp: '2020-07-28T10:15:00Z',
    dateDisplay: 'Jul 28, 2020',
    year: 2020,
    month: 7,
    timeOfDay: 'morning',
    location: {
      placeName: 'Misty Forest Trail',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Nature Hike', 'Forest Trail Trek', 'Monsoon Nature Walk'],
    subEvent: 'Friends Hiking on Lush Green Forest Trail',
    people: [],
    scenes: ['Forest Trail', 'Misty Woods', 'Nature', 'Hike', 'Outdoors'],
    activities: ['Trekking', 'Hiking', 'Walking in Forest'],
    objects: ['Lush Greenery', 'Misty Trees', 'Forest Path', 'Backpacks'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['green', 'misty', 'earthy'],
      aspectRatio: 0.75
    },
    caption: 'Friends hiking along a lush green, misty forest nature trail in monsoon season.',
    memoryStory: 'Trekking through the dense misty forest trail surrounded by fresh green foliage.'
  },

  // =========================================================================
  // 6. 202106_a: Siberian Husky Dog on Bed with MacBook Laptop (Jun 2021)
  // =========================================================================
  {
    id: 'photo-202106-01',
    filePath: '202106_a/QOSD2690.JPG',
    fileName: 'QOSD2690.JPG',
    url: '/202106_a/QOSD2690.JPG',
    timestamp: '2021-06-15T16:00:00Z',
    dateDisplay: 'Jun 15, 2021',
    year: 2021,
    month: 6,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Home Bedroom',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Cozy Day with Dog', 'Dog on Bed with Laptop', 'Pet Moments'],
    subEvent: 'Siberian Husky Dog Lying on Bed beside Laptop',
    people: [],
    scenes: ['Bedroom', 'Bed', 'Indoor', 'Cozy Room'],
    activities: ['Watching Laptop', 'Relaxing with Pet Dog', 'Lying in Bed'],
    objects: ['Siberian Husky Dog', 'MacBook Laptop', 'Bed', 'Blanket', 'Pillow', 'Laptop Screen'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'husky-bed-202106',
      dominantColors: ['grey', 'white', 'silver', 'warm'],
      aspectRatio: 0.75
    },
    caption: 'Man lying in bed with a Siberian Husky dog resting next to him, watching a video on a MacBook laptop.',
    memoryStory: 'Cozy lazy afternoon in bed with the Siberian Husky dog watching videos together on the laptop.'
  },
  {
    id: 'photo-202106-02',
    filePath: '202106_a/UPDM4343.JPG',
    fileName: 'UPDM4343.JPG',
    url: '/202106_a/UPDM4343.JPG',
    timestamp: '2021-06-15T16:05:00Z',
    dateDisplay: 'Jun 15, 2021',
    year: 2021,
    month: 6,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Home Bedroom',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Cozy Day with Dog', 'Dog on Bed with Laptop', 'Pet Moments'],
    subEvent: 'Close-up of Siberian Husky on Bed with Laptop',
    people: [],
    scenes: ['Bedroom', 'Bed', 'Indoor', 'Pet Photography'],
    activities: ['Resting in Bed', 'Chilling with Dog'],
    objects: ['Siberian Husky', 'MacBook Laptop', 'Bed Sheets', 'Fur'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'husky-bed-202106',
      dominantColors: ['grey', 'white', 'black'],
      aspectRatio: 0.75
    },
    caption: 'Close-up of the Siberian Husky dog peacefully lying on the bed beside the MacBook laptop.',
    memoryStory: 'Our fluffy Siberian Husky buddy resting right by the laptop screen on the bed.'
  },

  // =========================================================================
  // 7. 202202_a: Art of Living Ashram, Sri Sri Ravi Shankar, Fountain, Ethnic Day (Feb 2022)
  // =========================================================================
  {
    id: 'photo-202202-01',
    filePath: '202202_a/AEWQ5032.JPG',
    fileName: 'AEWQ5032.JPG',
    url: '/202202_a/AEWQ5032.JPG',
    timestamp: '2022-02-08T11:30:00Z',
    dateDisplay: 'Feb 8, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'morning',
    location: {
      placeName: 'Garden / Outdoors',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Garden Portrait', 'Day Out'],
    subEvent: 'Woman in Blue Floral Kurta in Garden',
    people: [],
    scenes: ['Garden', 'Outdoors', 'Portrait', 'Nature'],
    activities: ['Posing in Garden', 'Outdoor Portrait'],
    objects: ['Blue Floral Kurta', 'Garden Greenery', 'Flowers'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['blue', 'green', 'white'],
      aspectRatio: 0.75
    },
    caption: 'Woman smiling in a blue floral printed kurta outdoors in the garden.',
    memoryStory: 'Pleasant sunny morning posing in the lush green garden.'
  },
  {
    id: 'photo-202202-02',
    filePath: '202202_a/FZKX7576.JPG',
    fileName: 'FZKX7576.JPG',
    url: '/202202_a/FZKX7576.JPG',
    timestamp: '2022-02-12T18:00:00Z',
    dateDisplay: 'Feb 12, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'evening',
    location: {
      city: 'Bengaluru',
      placeName: 'Art of Living International Ashram',
      state: 'Karnataka',
      country: 'India'
    },
    eventContext: ['Art of Living Satsang', 'Spiritual Gathering', 'Ashram Visit'],
    subEvent: 'Satsang Gathering with Gurudev Sri Sri Ravi Shankar',
    people: ['Sri Sri Ravi Shankar'],
    scenes: ['Ashram', 'Satsang Hall', 'Spiritual Gathering', 'Stage'],
    activities: ['Attending Satsang', 'Meditation', 'Spiritual Discourse'],
    objects: ['Stage', 'Flowers', 'Garlands', 'Ashram Audience'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['white', 'gold', 'warm'],
      aspectRatio: 0.75
    },
    caption: 'Spiritual satsang and gathering with Gurudev Sri Sri Ravi Shankar at the Art of Living Ashram in Bangalore.',
    memoryStory: 'Serene and uplifting satsang evening with Sri Sri Ravi Shankar at Bangalore Ashram.'
  },
  {
    id: 'photo-202202-03',
    filePath: '202202_a/HHFN3217.JPG',
    fileName: 'HHFN3217.JPG',
    url: '/202202_a/HHFN3217.JPG',
    timestamp: '2022-02-12T20:15:00Z',
    dateDisplay: 'Feb 12, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'night',
    location: {
      city: 'Bengaluru',
      placeName: 'Art of Living International Ashram',
      state: 'Karnataka',
      country: 'India'
    },
    eventContext: ['Ashram Musical Fountain', 'Art of Living Night Light Show', 'Ashram Amphitheater'],
    subEvent: 'Illuminated Amphitheater & Musical Fountain at Night',
    people: [],
    scenes: ['Ashram Amphitheater', 'Musical Fountain', 'Night Lights', 'Water Show'],
    activities: ['Watching Musical Fountain', 'Night Walk in Ashram'],
    objects: ['Fountain Water Jets', 'Illuminated Dome', 'Colored Lights', 'Pond'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'ashram-fountain-202202',
      dominantColors: ['blue', 'purple', 'gold', 'dark'],
      aspectRatio: 0.75
    },
    caption: 'Art of Living Bangalore Ashram illuminated amphitheater and musical fountain water show at night.',
    memoryStory: 'Captivating colored musical fountain and illuminated architecture at Bangalore Ashram at night.'
  },
  {
    id: 'photo-202202-04',
    filePath: '202202_a/IYVM9973.JPG',
    fileName: 'IYVM9973.JPG',
    url: '/202202_a/IYVM9973.JPG',
    timestamp: '2022-02-12T20:20:00Z',
    dateDisplay: 'Feb 12, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'night',
    location: {
      city: 'Bengaluru',
      placeName: 'Art of Living International Ashram',
      state: 'Karnataka',
      country: 'India'
    },
    eventContext: ['Ashram Musical Fountain', 'Art of Living Night Light Show', 'Ashram Amphitheater'],
    subEvent: 'Glowing Water Fountains & Ashram Lights',
    people: [],
    scenes: ['Ashram Amphitheater', 'Musical Fountain', 'Night Lights', 'Water Show'],
    activities: ['Watching Light Show'],
    objects: ['Water Jets', 'Amphitheater Seating', 'Night Illumination'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'ashram-fountain-202202',
      dominantColors: ['magenta', 'blue', 'dark'],
      aspectRatio: 0.75
    },
    caption: 'Night view of the glowing musical fountain and illuminated amphitheater at Art of Living Bengaluru.',
    memoryStory: 'Mesmerizing evening water fountain show at the Art of Living Bangalore.'
  },
  {
    id: 'photo-202202-05',
    filePath: '202202_a/IWFF7597.JPG',
    fileName: 'IWFF7597.JPG',
    url: '/202202_a/IWFF7597.JPG',
    timestamp: '2022-02-18T13:00:00Z',
    dateDisplay: 'Feb 18, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'College Campus Corridor',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Ethnic Day', 'College Traditional Day', 'Campus Celebrations'],
    subEvent: 'Young Women in Traditional Indian Attire in Corridor',
    people: [],
    scenes: ['College Corridor', 'Campus Building', 'Indoors'],
    activities: ['Posing in Ethnic Attire', 'College Ethnic Day'],
    objects: ['Traditional Sarees', 'Kurtas', 'Corridor Pillars', 'Ethnic Wear'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['red', 'gold', 'green', 'white'],
      aspectRatio: 0.75
    },
    caption: 'Group of young women dressed in colorful traditional Indian sarees and kurtas posing in college corridor.',
    memoryStory: 'Vibrant college ethnic day celebration with everyone dressed in traditional Indian attire.'
  },
  {
    id: 'photo-202202-06',
    filePath: '202202_a/YJES6165.JPG',
    fileName: 'YJES6165.JPG',
    url: '/202202_a/YJES6165.JPG',
    timestamp: '2022-02-24T15:30:00Z',
    dateDisplay: 'Feb 24, 2022',
    year: 2022,
    month: 2,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Outdoor Cafe',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Cafe Hangout', 'Sunny Day', 'Portrait'],
    subEvent: 'Young Man in Sunglasses at Outdoor Cafe Table',
    people: [],
    scenes: ['Cafe', 'Outdoor Dining', 'Sunny Day'],
    activities: ['Sitting at Cafe', 'Having Drinks'],
    objects: ['Dark Sunglasses', 'Cafe Table', 'Drink Glass', 'Casual Shirt'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['warm', 'blue', 'black'],
      aspectRatio: 0.75
    },
    caption: 'Young man wearing sunglasses sitting at an outdoor cafe with a drink on the table.',
    memoryStory: 'Chilling at the outdoor cafe enjoying a cold beverage on a bright afternoon.'
  },

  // =========================================================================
  // 8. 202211_a: Music Concert Crowd & Vintage Babli Baby Prints (Nov 2022)
  // =========================================================================
  {
    id: 'photo-202211-01',
    filePath: '202211_a/KIRS1772.JPG',
    fileName: 'KIRS1772.JPG',
    url: '/202211_a/KIRS1772.JPG',
    timestamp: '2022-11-10T21:40:00Z',
    dateDisplay: 'Nov 10, 2022',
    year: 2022,
    month: 11,
    timeOfDay: 'night',
    location: {
      placeName: 'Music Festival Arena',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Live Music Concert', 'Music Festival', 'Night Concert Crowd'],
    subEvent: 'Crowd at Music Festival with Stage Light Beams',
    people: [],
    scenes: ['Concert Arena', 'Stage Show', 'Music Festival', 'Night Event'],
    activities: ['Attending Concert', 'Cheering in Crowd', 'Enjoying Live Music'],
    objects: ['Concert Crowd', 'Stage Lighting', 'Light Beams', 'Concert Stage', 'Festival Atmosphere'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['purple', 'blue', 'dark', 'gold'],
      aspectRatio: 1.33
    },
    caption: 'Huge crowd cheering at a live music concert and music festival at night with dazzling stage lights.',
    memoryStory: 'Unforgettable night at the live music concert surrounded by cheering crowds and stage lights.'
  },
  {
    id: 'photo-202211-02',
    filePath: '202211_a/LJJM4974.JPG',
    fileName: 'LJJM4974.JPG',
    url: '/202211_a/LJJM4974.JPG',
    timestamp: '2022-11-20T12:00:00Z',
    dateDisplay: 'Nov 20, 2022',
    year: 2022,
    month: 11,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Family Photo Album',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Childhood Vintage Photo Prints', 'Babli Baby Photo Archive', 'Family Memories'],
    subEvent: 'Vintage Printed Photograph of Mother Holding Baby / Toddler ("Babli")',
    people: ['Babli (handwritten note)'],
    scenes: ['Vintage Photo Print', 'Old Photograph', 'Family Archive', 'Black & White / Retro'],
    activities: ['Family Photo Print', 'Childhood Memories'],
    objects: ['Vintage Photo Print', 'Mother & Baby', 'Handwritten "Babli" Note', 'Photo Border'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'babli-vintage-202211',
      dominantColors: ['sepia', 'warm', 'vintage'],
      aspectRatio: 0.75
    },
    caption: 'Vintage childhood printed photograph of mother holding toddler/baby with handwritten label "Babli".',
    memoryStory: 'Cherished old family photograph print from childhood labeled Babli.'
  },
  {
    id: 'photo-202211-03',
    filePath: '202211_a/PMUZ5077.JPG',
    fileName: 'PMUZ5077.JPG',
    url: '/202211_a/PMUZ5077.JPG',
    timestamp: '2022-11-20T12:05:00Z',
    dateDisplay: 'Nov 20, 2022',
    year: 2022,
    month: 11,
    timeOfDay: 'afternoon',
    location: {
      placeName: 'Family Photo Album',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Childhood Vintage Photo Prints', 'Babli Baby Photo Archive', 'Family Memories'],
    subEvent: 'Close-up of Vintage Childhood Printed Photo',
    people: ['Babli (handwritten note)'],
    scenes: ['Vintage Photo Print', 'Old Photograph', 'Family Archive'],
    activities: ['Archiving Childhood Photos'],
    objects: ['Photo Print', 'Childhood Portrait', 'Baby Picture'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'babli-vintage-202211',
      dominantColors: ['vintage', 'sepia', 'warm'],
      aspectRatio: 0.75
    },
    caption: 'Vintage printed baby photograph with handwritten note from family album archive.',
    memoryStory: 'Looking through nostalgic childhood printed pictures and family memories.'
  },

  // =========================================================================
  // 9. 202212_a: MMA & Kickboxing Gym Training (Dec 2022)
  // =========================================================================
  {
    id: 'photo-202212-01',
    filePath: '202212_a/BRZY0689.JPG',
    fileName: 'BRZY0689.JPG',
    url: '/202212_a/BRZY0689.JPG',
    timestamp: '2022-12-18T08:30:00Z',
    dateDisplay: 'Dec 18, 2022',
    year: 2022,
    month: 12,
    timeOfDay: 'morning',
    location: {
      placeName: 'MMA Combat & Fitness Dojo',
      state: 'India',
      country: 'India'
    },
    eventContext: ['MMA Training', 'Kickboxing Workout', 'Gym Training Session'],
    subEvent: 'Red Boxing Gloves & Heavy Punching Bags in Gym',
    people: [],
    scenes: ['MMA Gym', 'Dojo', 'Boxing Gym', 'Fitness Studio', 'Indoor Gym'],
    activities: ['Kickboxing', 'MMA Training', 'Punching Bag Workout', 'Fitness Training'],
    objects: ['Red Boxing Gloves', 'Heavy Punching Bags', 'Battle Ropes', 'Workout Mats', 'Gym Equipment'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'mma-gym-202212',
      dominantColors: ['red', 'black', 'grey'],
      aspectRatio: 0.75
    },
    caption: 'MMA and kickboxing gym training area with hanging heavy punching bags and red boxing gloves.',
    memoryStory: 'Intense morning workout session at the kickboxing and martial arts training gym.'
  },
  {
    id: 'photo-202212-02',
    filePath: '202212_a/DRET4532.JPG',
    fileName: 'DRET4532.JPG',
    url: '/202212_a/DRET4532.JPG',
    timestamp: '2022-12-18T08:35:00Z',
    dateDisplay: 'Dec 18, 2022',
    year: 2022,
    month: 12,
    timeOfDay: 'morning',
    location: {
      placeName: 'MMA Combat & Fitness Dojo',
      state: 'India',
      country: 'India'
    },
    eventContext: ['MMA Training', 'Kickboxing Workout', 'Gym Training Session'],
    subEvent: 'Punching Bags and Martial Arts Training Mats',
    people: [],
    scenes: ['MMA Gym', 'Dojo', 'Boxing Gym', 'Fitness Studio'],
    activities: ['Martial Arts', 'Bag Work', 'Combat Sports'],
    objects: ['Heavy Bags', 'Dojo Mats', 'Gloves', 'Battle Ropes'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'mma-gym-202212',
      dominantColors: ['black', 'red', 'industrial'],
      aspectRatio: 0.75
    },
    caption: 'Martial arts mats and row of heavy punching bags inside the MMA fitness gym.',
    memoryStory: 'Pushing through heavy bag combos during combat fitness training.'
  },
  {
    id: 'photo-202212-03',
    filePath: '202212_a/IMG_8262.JPG',
    fileName: 'IMG_8262.JPG',
    url: '/202212_a/IMG_8262.JPG',
    timestamp: '2022-12-18T08:40:00Z',
    dateDisplay: 'Dec 18, 2022',
    year: 2022,
    month: 12,
    timeOfDay: 'morning',
    location: {
      placeName: 'MMA Combat & Fitness Dojo',
      state: 'India',
      country: 'India'
    },
    eventContext: ['MMA Training', 'Kickboxing Workout', 'Gym Training Session'],
    subEvent: 'Red Boxing Gloves Resting on Gym Floor',
    people: [],
    scenes: ['MMA Gym', 'Boxing Gym', 'Fitness Studio'],
    activities: ['Boxing Training', 'Workout Break'],
    objects: ['Red Boxing Gloves', 'Gym Floor', 'Heavy Bag Base'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'mma-gym-202212',
      dominantColors: ['red', 'dark', 'grey'],
      aspectRatio: 0.75
    },
    caption: 'Red leather boxing gloves on the gym floor next to punching bag during training break.',
    memoryStory: 'Catching breath between rounds during boxing glove and bag practice.'
  },
  {
    id: 'photo-202212-04',
    filePath: '202212_a/QJON9620.JPG',
    fileName: 'QJON9620.JPG',
    url: '/202212_a/QJON9620.JPG',
    timestamp: '2022-12-18T08:45:00Z',
    dateDisplay: 'Dec 18, 2022',
    year: 2022,
    month: 12,
    timeOfDay: 'morning',
    location: {
      placeName: 'MMA Combat & Fitness Dojo',
      state: 'India',
      country: 'India'
    },
    eventContext: ['MMA Training', 'Kickboxing Workout', 'Gym Training Session'],
    subEvent: 'Combat Sports Equipment & Dojo Rig',
    people: [],
    scenes: ['MMA Gym', 'Dojo', 'Fitness Studio'],
    activities: ['Conditioning', 'Combat Sports'],
    objects: ['Heavy Punching Bags', 'Battle Ropes', 'Pull-up Rig'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'mma-gym-202212',
      dominantColors: ['black', 'red', 'steel'],
      aspectRatio: 0.75
    },
    caption: 'Combat sports conditioning area with battle ropes and heavy punching bags.',
    memoryStory: 'Grueling battle rope and boxing workout session at the MMA gym.'
  },

  // =========================================================================
  // 10. 202303_a: MBA Graduation Stairs, Classroom Hall, Gunjan Birthday Brownie, SPPU Certificate, Night Beach Shack LED (Mar 2023)
  // =========================================================================
  // --- MBA Batch Graduation Photo on Building Steps (Burst Series) ---
  {
    id: 'photo-202303-01',
    filePath: '202303_a/AREX2860.JPG',
    fileName: 'AREX2860.JPG',
    url: '/202303_a/AREX2860.JPG',
    timestamp: '2023-03-24T12:30:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'Entire MBA Batch & Faculty Formal Group Photo on Grand Stairs',
    people: [],
    scenes: ['College Steps', 'Campus Entrance', 'Formal Group Photo', 'Outdoor Steps'],
    activities: ['Graduation Group Photo', 'Cohort Farewell', 'Posing on Stairs'],
    objects: ['Black Business Suits', 'Blazers', 'Formal Sarees', 'Staircase Steps', 'Faculty Chairs'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige', 'navy', 'green'],
      aspectRatio: 1.33
    },
    caption: 'Entire MBA graduating batch in formal black suits and blazers posing on building stairs with faculty seated in front.',
    memoryStory: 'Historic MBA batch graduation cohort photo on the grand college steps with all classmates and professors.'
  },
  {
    id: 'photo-202303-02',
    filePath: '202303_a/CMND0446.JPG',
    fileName: 'CMND0446.JPG',
    url: '/202303_a/CMND0446.JPG',
    timestamp: '2023-03-24T12:31:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Cohort Formal Group Photo on Steps (Shot 2)',
    people: [],
    scenes: ['College Steps', 'Campus Entrance', 'Formal Group Photo'],
    activities: ['Graduation Photo', 'Cohort Farewell'],
    objects: ['Black Suits', 'Blazers', 'Formal Wear', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige', 'navy'],
      aspectRatio: 1.33
    },
    caption: 'MBA graduation batch standing on grand campus stairs in formal business suits with professors.',
    memoryStory: 'Celebrating the culmination of our MBA journey with the entire batch on the grand staircase.'
  },
  {
    id: 'photo-202303-03',
    filePath: '202303_a/EQWJ5621.JPG',
    fileName: 'EQWJ5621.JPG',
    url: '/202303_a/EQWJ5621.JPG',
    timestamp: '2023-03-24T12:32:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Cohort Formal Group Photo on Steps (Shot 3)',
    people: [],
    scenes: ['College Steps', 'Campus Entrance', 'Formal Group Photo'],
    activities: ['Graduation Photo', 'Batch Picture'],
    objects: ['Black Business Suits', 'Professors Seated', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige', 'formal'],
      aspectRatio: 1.33
    },
    caption: 'Formal MBA cohort graduation picture on the wide institute steps.',
    memoryStory: 'All MBA classmates gathered together in formal suits for the official batch photograph.'
  },
  {
    id: 'photo-202303-04',
    filePath: '202303_a/FRDU6671.JPG',
    fileName: 'FRDU6671.JPG',
    url: '/202303_a/FRDU6671.JPG',
    timestamp: '2023-03-24T12:33:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Cohort Group Picture on Stairs (Shot 4)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Faculty', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'stone'],
      aspectRatio: 1.33
    },
    caption: 'Official MBA batch group picture on the institute entrance staircase.',
    memoryStory: 'Batch of 2023 posing with faculty on the iconic college steps.'
  },
  {
    id: 'photo-202303-05',
    filePath: '202303_a/GENU5274.JPG',
    fileName: 'GENU5274.JPG',
    url: '/202303_a/GENU5274.JPG',
    timestamp: '2023-03-24T12:34:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Cohort Group Photo on Steps (Shot 5)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Black Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'stone'],
      aspectRatio: 1.33
    },
    caption: 'MBA graduation batch photo on the stairs with professors seated in the front row.',
    memoryStory: 'Faculty and students smiling together on the institute staircase.'
  },
  {
    id: 'photo-202303-06',
    filePath: '202303_a/IUFR5087.JPG',
    fileName: 'IUFR5087.JPG',
    url: '/202303_a/IUFR5087.JPG',
    timestamp: '2023-03-24T12:35:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Graduating Cohort and Faculty on Steps (Shot 6)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Blazers', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'Graduation cohort in business formals on the college steps with faculty.',
    memoryStory: 'Unforgettable farewell and graduation day on the campus stairs.'
  },
  {
    id: 'photo-202303-07',
    filePath: '202303_a/JDLG6512.JPG',
    fileName: 'JDLG6512.JPG',
    url: '/202303_a/JDLG6512.JPG',
    timestamp: '2023-03-24T12:36:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch Formal Group on Steps (Shot 7)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'Formal MBA cohort batch group photo on the institute steps.',
    memoryStory: 'All hundred classmates standing together on the campus steps.'
  },
  {
    id: 'photo-202303-08',
    filePath: '202303_a/MKCT6598.JPG',
    fileName: 'MKCT6598.JPG',
    url: '/202303_a/MKCT6598.JPG',
    timestamp: '2023-03-24T12:37:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch on Steps (Shot 8)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'MBA graduation batch photo on the stairs with professors.',
    memoryStory: 'Proud moment with faculty and classmates on the college steps.'
  },
  {
    id: 'photo-202303-09',
    filePath: '202303_a/RYYC6728.JPG',
    fileName: 'RYYC6728.JPG',
    url: '/202303_a/RYYC6728.JPG',
    timestamp: '2023-03-24T12:38:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch on Steps (Shot 9)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'MBA batch graduation picture on the campus stairs.',
    memoryStory: 'Batch photo on the institute steps.'
  },
  {
    id: 'photo-202303-10',
    filePath: '202303_a/SGDZ7682.JPG',
    fileName: 'SGDZ7682.JPG',
    url: '/202303_a/SGDZ7682.JPG',
    timestamp: '2023-03-24T12:39:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch on Steps (Shot 10)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'MBA cohort batch photo on the stairs.',
    memoryStory: 'Graduation cohort photo on steps.'
  },
  {
    id: 'photo-202303-11',
    filePath: '202303_a/TTMT4996.JPG',
    fileName: 'TTMT4996.JPG',
    url: '/202303_a/TTMT4996.JPG',
    timestamp: '2023-03-24T12:40:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch on Steps (Shot 11)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'MBA cohort graduating class photo on the institute steps.',
    memoryStory: 'Class of 2023 on the campus steps.'
  },
  {
    id: 'photo-202303-12',
    filePath: '202303_a/TUCY0030.JPG',
    fileName: 'TUCY0030.JPG',
    url: '/202303_a/TUCY0030.JPG',
    timestamp: '2023-03-24T12:41:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'Management Institute Grand Steps',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Batch Graduation Photo', 'Cohort Formal Photo on Stairs', 'MBA Convocation'],
    subEvent: 'MBA Batch on Steps (Shot 12)',
    people: [],
    scenes: ['College Steps', 'Formal Group Photo'],
    activities: ['Graduation Photo'],
    objects: ['Suits', 'Steps'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-batch-stairs-202303',
      dominantColors: ['black', 'beige'],
      aspectRatio: 1.33
    },
    caption: 'MBA batch graduation photo on steps with professors.',
    memoryStory: 'Final batch graduation picture on campus.'
  },

  // --- MBA Classroom / Lecture Hall with Professor (Burst Series) ---
  {
    id: 'photo-202303-13',
    filePath: '202303_a/CCBY7903.JPG',
    fileName: 'CCBY7903.JPG',
    url: '/202303_a/CCBY7903.JPG',
    timestamp: '2023-03-24T14:15:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'MBA Lecture Hall / Auditorium',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Classroom Lecture Hall Photo', 'Class Group with Professor', 'MBA Class Memory'],
    subEvent: 'Classroom Group Photo in Tiered Lecture Hall with Professor',
    people: [],
    scenes: ['Classroom', 'Lecture Hall', 'Auditorium Desk Seating', 'Indoors'],
    activities: ['MBA Class', 'Classroom Photo', 'Academic Gathering'],
    objects: ['Tiered Desks', 'Office Chairs', 'Professor in Pink Shirt', 'Ceiling Lights'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-classroom-202303',
      dominantColors: ['wood', 'warm', 'pink', 'white'],
      aspectRatio: 1.77
    },
    caption: 'MBA class group photo in tiered lecture hall with students seated at wooden desks and professor in pink shirt in front.',
    memoryStory: 'Last lecture memories in the tiered MBA auditorium classroom with our favorite professor.'
  },
  {
    id: 'photo-202303-14',
    filePath: '202303_a/IMG_8766.JPG',
    fileName: 'IMG_8766.JPG',
    url: '/202303_a/IMG_8766.JPG',
    timestamp: '2023-03-24T14:16:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'MBA Lecture Hall / Auditorium',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Classroom Lecture Hall Photo', 'Class Group with Professor', 'MBA Class Memory'],
    subEvent: 'MBA Classroom Group Photo (Shot 2)',
    people: [],
    scenes: ['Classroom', 'Lecture Hall', 'Auditorium Desk Seating'],
    activities: ['MBA Class', 'Classroom Photo'],
    objects: ['Tiered Desks', 'Chairs', 'Students', 'Professor'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-classroom-202303',
      dominantColors: ['wood', 'warm', 'white'],
      aspectRatio: 1.77
    },
    caption: 'Students and professor posing together in the tiered lecture auditorium.',
    memoryStory: 'Cherished memories from the lecture hall classroom after our final MBA semester.'
  },
  {
    id: 'photo-202303-15',
    filePath: '202303_a/IMG_8767.JPG',
    fileName: 'IMG_8767.JPG',
    url: '/202303_a/IMG_8767.JPG',
    timestamp: '2023-03-24T14:17:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'MBA Lecture Hall / Auditorium',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Classroom Lecture Hall Photo', 'Class Group with Professor', 'MBA Class Memory'],
    subEvent: 'MBA Classroom Group Photo (Shot 3)',
    people: [],
    scenes: ['Classroom', 'Lecture Hall', 'Auditorium Desk Seating'],
    activities: ['MBA Class', 'Classroom Photo'],
    objects: ['Tiered Desks', 'Chairs', 'Professor'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-classroom-202303',
      dominantColors: ['wood', 'warm', 'white'],
      aspectRatio: 1.77
    },
    caption: 'Classmates smiling in the MBA lecture hall with the professor.',
    memoryStory: 'Class group shot in the auditorium.'
  },
  {
    id: 'photo-202303-16',
    filePath: '202303_a/NXCT2999.JPG',
    fileName: 'NXCT2999.JPG',
    url: '/202303_a/NXCT2999.JPG',
    timestamp: '2023-03-24T14:18:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'MBA Lecture Hall / Auditorium',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Classroom Lecture Hall Photo', 'Class Group with Professor', 'MBA Class Memory'],
    subEvent: 'MBA Classroom Group Photo (Shot 4)',
    people: [],
    scenes: ['Classroom', 'Lecture Hall', 'Auditorium Desk Seating'],
    activities: ['MBA Class', 'Classroom Photo'],
    objects: ['Tiered Desks', 'Chairs', 'Professor'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-classroom-202303',
      dominantColors: ['wood', 'warm', 'white'],
      aspectRatio: 1.77
    },
    caption: 'Group photo in the curved wooden tiered lecture hall with classmates and professor.',
    memoryStory: 'Posing in our regular lecture auditorium seats on the final day.'
  },
  {
    id: 'photo-202303-17',
    filePath: '202303_a/QZBI5634.JPG',
    fileName: 'QZBI5634.JPG',
    url: '/202303_a/QZBI5634.JPG',
    timestamp: '2023-03-24T14:19:00Z',
    dateDisplay: 'Mar 24, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'afternoon',
    location: {
      city: 'Pune',
      placeName: 'MBA Lecture Hall / Auditorium',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['MBA Classroom Lecture Hall Photo', 'Class Group with Professor', 'MBA Class Memory'],
    subEvent: 'MBA Classroom Group Photo (Shot 5)',
    people: [],
    scenes: ['Classroom', 'Lecture Hall', 'Auditorium Desk Seating'],
    activities: ['MBA Class', 'Classroom Photo'],
    objects: ['Tiered Desks', 'Chairs'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: true,
      burstGroupId: 'mba-classroom-202303',
      dominantColors: ['wood', 'warm'],
      aspectRatio: 1.77
    },
    caption: 'Classroom photo in the auditorium with professor.',
    memoryStory: 'Farewell photo inside the MBA classroom.'
  },

  // --- Gunjan Birthday Brownie Celebration ---
  {
    id: 'photo-202303-18',
    filePath: '202303_a/IMG_8691.JPG',
    fileName: 'IMG_8691.JPG',
    url: '/202303_a/IMG_8691.JPG',
    timestamp: '2023-03-26T20:30:00Z',
    dateDisplay: 'Mar 26, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'night',
    location: {
      placeName: 'Restaurant Dessert Table',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Gunjan Birthday Celebration', 'Birthday Brownie Cake', 'Birthday Party'],
    subEvent: 'Birthday Chocolate Brownie with Lit Candle & "HAPPY BIRTHDAY GUNJAN" Lettering',
    people: ['Gunjan'],
    scenes: ['Birthday Celebration', 'Dessert Table', 'Restaurant', 'Indoor'],
    activities: ['Birthday Celebration', 'Cake Cutting', 'Dining'],
    objects: ['Chocolate Brownie', 'Lit Birthday Candle', '"HAPPY BIRTHDAY GUNJAN" Chocolate Lettering', 'White Dessert Plate', 'Fork'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'gunjan-birthday-202303',
      dominantColors: ['chocolate-brown', 'white', 'warm-candle'],
      aspectRatio: 0.75
    },
    caption: 'Birthday dessert plate with chocolate brownie pastry, a burning candle, and chocolate sauce lettering "HAPPY BIRTHDAY GUNJAN".',
    memoryStory: 'Celebrating Gunjan’s birthday with a special chocolate brownie dessert and candle.'
  },
  {
    id: 'photo-202303-19',
    filePath: '202303_a/IMG_8692.JPG',
    fileName: 'IMG_8692.JPG',
    url: '/202303_a/IMG_8692.JPG',
    timestamp: '2023-03-26T20:31:00Z',
    dateDisplay: 'Mar 26, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'night',
    location: {
      placeName: 'Restaurant Dessert Table',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Gunjan Birthday Celebration', 'Birthday Brownie Cake', 'Birthday Party'],
    subEvent: 'Close-up of Birthday Brownie and Candle for Gunjan',
    people: ['Gunjan'],
    scenes: ['Birthday Celebration', 'Dessert Table', 'Restaurant'],
    activities: ['Birthday Celebration', 'Dessert'],
    objects: ['Chocolate Brownie', 'Candle Flame', 'Happy Birthday Gunjan Text', 'Dessert Plate'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'gunjan-birthday-202303',
      dominantColors: ['chocolate', 'white', 'glow'],
      aspectRatio: 0.75
    },
    caption: 'Close-up shot of the birthday chocolate brownie with glowing candle flame and "HAPPY BIRTHDAY GUNJAN" message.',
    memoryStory: 'Gunjan making a birthday wish before blowing out the candle on the chocolate brownie.'
  },

  // --- Savitribai Phule Pune University (SPPU) Migration Certificate ---
  {
    id: 'photo-202303-20',
    filePath: '202303_a/IMG_8781.JPG',
    fileName: 'IMG_8781.JPG',
    url: '/202303_a/IMG_8781.JPG',
    timestamp: '2023-03-28T11:00:00Z',
    dateDisplay: 'Mar 28, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'morning',
    location: {
      city: 'Pune',
      placeName: 'Savitribai Phule Pune University (SPPU)',
      state: 'Maharashtra',
      country: 'India'
    },
    eventContext: ['University Official Document', 'SPPU Migration Certificate', 'Academic Records'],
    subEvent: 'SPPU Migration Certificate for Prakhar Dubey',
    people: ['Prakhar Dubey'],
    scenes: ['Document', 'Official Certificate', 'Paperwork'],
    activities: ['University Documentation', 'Certificate Issuance'],
    objects: ['Migration Certificate', 'SPPU Seal', 'University Stamp', 'Official Paper'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: false,
      dominantColors: ['white', 'blue', 'black'],
      aspectRatio: 0.75
    },
    caption: 'Official Savitribai Phule Pune University (SPPU) Migration Certificate document for Prakhar Dubey.',
    memoryStory: 'Official SPPU migration certificate issued upon university completion.'
  },

  // --- Woman in Glowing LED Flower Headband at Night Beach Shack ---
  {
    id: 'photo-202303-21',
    filePath: '202303_a/IMG_8826.JPG',
    fileName: 'IMG_8826.JPG',
    url: '/202303_a/IMG_8826.JPG',
    timestamp: '2023-03-30T22:15:00Z',
    dateDisplay: 'Mar 30, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'night',
    location: {
      placeName: 'Beach Shack Restaurant at Night',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Beach Shack Night Dinner', 'LED Flower Crown at Cafe', 'Night Out'],
    subEvent: 'Woman at Beach Shack Table with Glowing LED Headband (Motion Blur)',
    people: [],
    scenes: ['Beach Shack', 'Night Cafe', 'Outdoor Dining', 'Night'],
    activities: ['Dining at Night', 'Wearing Light-up Crown'],
    objects: ['Purple Glowing LED Headband', 'Wooden Table', 'Night Lights'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'shack-led-202303',
      dominantColors: ['purple', 'dark', 'glow'],
      aspectRatio: 0.56
    },
    caption: 'Motion-blurred night photo of woman sitting at beach shack wooden table wearing a glowing purple LED headband.',
    memoryStory: 'Fun night at the open-air beach shack wearing glowing LED flower headbands under the night lights.'
  },
  {
    id: 'photo-202303-22',
    filePath: '202303_a/IMG_8827.JPG',
    fileName: 'IMG_8827.JPG',
    url: '/202303_a/IMG_8827.JPG',
    timestamp: '2023-03-30T22:16:00Z',
    dateDisplay: 'Mar 30, 2023',
    year: 2023,
    month: 3,
    timeOfDay: 'night',
    location: {
      placeName: 'Beach Shack Restaurant at Night',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Beach Shack Night Dinner', 'LED Flower Crown at Cafe', 'Night Out'],
    subEvent: 'Woman with Light-up Purple LED Headband and Food Menu at Beach Shack',
    people: [],
    scenes: ['Beach Shack', 'Night Cafe', 'Outdoor Dining', 'Night'],
    activities: ['Reading Food Menu', 'Dining at Beach Shack'],
    objects: ['Light-up Purple LED Headband', 'Food Menu Cards', 'Wooden Table', 'Green Neon Sign "URA"'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: false,
      isBurstCandidate: true,
      burstGroupId: 'shack-led-202303',
      dominantColors: ['purple-glow', 'dark', 'white-table'],
      aspectRatio: 0.56
    },
    caption: 'Woman wearing a glowing purple LED flower crown sitting at a beach shack dining table with food menus and neon background.',
    memoryStory: 'Late night dinner at the beach shack looking over menus with illuminated flower headbands.'
  },

  // =========================================================================
  // 11. 202308_a: Vintage Childhood Photo Prints (Garden, Tea Garden, Sikkim Yak Ride)
  // =========================================================================
  {
    id: 'photo-202308-01',
    filePath: '202308_a/KNQK4459.JPG',
    fileName: 'KNQK4459.JPG',
    url: '/202308_a/KNQK4459.JPG',
    timestamp: '2023-08-15T11:00:00Z',
    dateDisplay: 'Aug 15, 2023',
    year: 2023,
    month: 8,
    timeOfDay: 'morning',
    location: {
      placeName: 'Flower Garden',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Childhood Photo in Flower Garden', 'Vintage Childhood Memory', 'Sibling / Family Archive'],
    subEvent: 'Boy in Red Polo & Girl in White Turtleneck in Garden',
    people: [],
    scenes: ['Flower Garden', 'Outdoor Garden', 'Vintage Photo Print', 'Childhood'],
    activities: ['Childhood Photo', 'Posing in Garden'],
    objects: ['Red Polo Shirt', 'White Turtleneck', 'Garden Flowers', 'Vintage Print Border'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['red', 'white', 'green', 'vintage'],
      aspectRatio: 0.75
    },
    caption: 'Vintage childhood printed photograph of a young boy in a red polo shirt with arm around a smiling girl in a white turtleneck in a flower garden.',
    memoryStory: 'Precious nostalgic childhood print posing together in the garden during our early family travels.'
  },
  {
    id: 'photo-202308-02',
    filePath: '202308_a/PMRF4586.JPG',
    fileName: 'PMRF4586.JPG',
    url: '/202308_a/PMRF4586.JPG',
    timestamp: '2023-08-15T11:05:00Z',
    dateDisplay: 'Aug 15, 2023',
    year: 2023,
    month: 8,
    timeOfDay: 'morning',
    location: {
      placeName: 'Hill Station Tea Plantation',
      state: 'India',
      country: 'India'
    },
    eventContext: ['Childhood Photo in Tea Garden', 'Vintage Hill Station Memory', 'Family Vacation Archive'],
    subEvent: 'Boy and Girl in Tea Plantation Valley with Stepped Green Hills',
    people: [],
    scenes: ['Tea Garden', 'Tea Plantation', 'Hill Station', 'Vintage Photo Print', 'Nature'],
    activities: ['Childhood Trip', 'Posing in Tea Estate'],
    objects: ['Tea Bushes', 'Stepped Green Hills', 'Red Shirt', 'White Turtleneck'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['green', 'red', 'white', 'vintage'],
      aspectRatio: 0.75
    },
    caption: 'Vintage childhood photograph of boy and girl standing in front of rolling stepped green tea plantation hills.',
    memoryStory: 'Childhood vacation memories amidst the scenic green rolling hills of a tea garden estate.'
  },
  {
    id: 'photo-202308-03',
    filePath: '202308_a/SDSN3996.JPG',
    fileName: 'SDSN3996.JPG',
    url: '/202308_a/SDSN3996.JPG',
    timestamp: '2023-08-15T11:10:00Z',
    dateDisplay: 'Aug 15, 2023',
    year: 2023,
    month: 8,
    timeOfDay: 'morning',
    location: {
      city: 'Sikkim',
      placeName: 'Tsomgo Lake',
      state: 'Sikkim',
      country: 'India'
    },
    eventContext: ['Childhood Yak Ride at Tsomgo Lake Sikkim', 'Snow Mountain Lake Yak Ride', 'Sikkim Vacation'],
    subEvent: 'Two Children Riding a Decorated Yak at Tsomgo Lake with Snow Mountain Backdrop',
    people: [],
    scenes: ['Alpine Lake', 'Snow Mountain', 'Sikkim Tsomgo Lake', 'Vintage Photo Print', 'Mountains'],
    activities: ['Riding a Yak', 'Winter Vacation', 'Childhood Holiday'],
    objects: ['Decorated Yak with Horns ("TSOMGO")', 'Snow Covered Mountain', 'Alpine Lake Water', 'Winter Jackets'],
    visualCharacteristics: {
      isSelfie: false,
      isGroupPhoto: true,
      isBurstCandidate: false,
      dominantColors: ['white-snow', 'orange', 'red', 'mountain-grey'],
      aspectRatio: 0.75
    },
    caption: 'Vintage childhood photo print of two kids riding a decorated yak at Tsomgo Lake in Sikkim with snow-covered mountains in the background.',
    memoryStory: 'Unforgettable childhood adventure riding a decorated yak by the freezing waters of Tsomgo Lake in Sikkim.'
  }
];

export const PHOTO_LIBRARY: PhotoRecord[] = RAW_PHOTO_LIBRARY.map((p) => ({
  ...p,
  url: p.url.startsWith('/') ? '.' + p.url : p.url,
}));

