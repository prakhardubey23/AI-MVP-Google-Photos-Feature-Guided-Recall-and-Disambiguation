# Project Context & Problem Statement: Vague-Memory Photo Retrieval in Google Photos MVP

---

## 1. Project Context

Google Photos currently provides two primary search experiences:
1. **Classic Search** — A fast search experience that primarily uses keywords and available photo metadata to retrieve matching photos and videos.
2. **Ask Photos** — An AI-powered search experience using Gemini that allows users to search their photo library using more natural, conversational, and complex prompts. Ask Photos can interpret user intent and provide summaries alongside relevant photo results.

Despite these capabilities, retrieving a specific older photo can still become difficult when the user's memory is incomplete.

Users with accumulated, multi-year photo libraries often remember a photo through **partial contextual clues** rather than precise information. For example, they may remember:
- **An event** — *"our Goa trip"*
- **A life phase** — *"when I was in college"*
- **People** — *"with my college friends"*
- **A place** — *"some beach in Goa"*
- **An approximate period** — *"around 2016"*
- **A visual detail** — *"we were sitting near the water"*

...while not remembering the exact date, album, location, or search terms required to retrieve the photo.

This creates two critical retrieval problems:

### Problem 1: Initial Retrieval Failure / Insufficient Narrowing
The user's initial memory description may not be precise enough to surface a sufficiently relevant candidate set.
> *Example:* `"That photo from my Goa trip during college."`

The query contains meaningful information, but it may still correspond to a large number of photos. The user therefore needs help converting incomplete memory into additional, useful retrieval constraints.

### Problem 2: Result Overload and Photo Identification
Even when the correct event, time period, people, or location has been retrieved, the user may still face a large number of similar candidate photos. For example, a Goa trip may contain dozens of:
- Beach photos
- Photos with the same people
- Burst-like sequences
- Visually similar group photos
- Photos taken only seconds apart

The intended photo may therefore already exist within the returned results but still be difficult to identify.

### User Compensation Behaviors
When either of these problems occurs, users are forced to compensate by:
- Reformulating the search multiple times
- Manually scrolling through the timeline
- Browsing albums
- Adding different keywords
- Inspecting individual photos one by one
- Eventually abandoning the retrieval journey

> **The Core Opportunity:**  
> The product opportunity is not simply to improve search accuracy. The opportunity is to help users **progressively convert incomplete memory into a smaller, more useful candidate set and then identify the exact photo they remember.**

---

## 2. Problem Statement & Core Features

Build a functional Minimum Viable Product (MVP) that demonstrates how vague-memory photo retrieval could be improved inside a realistic Google Photos App experience.

The MVP should visually resemble the **Google Photos app running on an iPhone**, rather than appearing as a generic search prototype or standalone AI application. The existing Google Photos-like product experience should act as the shell within which the new retrieval capabilities are introduced.

The MVP introduces two connected features:

### Feature 1: Guided Search Refinement
When the initial search does not sufficiently narrow the candidate set, the system should help the user determine what additional information could meaningfully improve the search.

Instead of forcing the user to repeatedly create new search queries from scratch, the system provides contextual refinement options based on:
- The user's original query
- Clues already provided
- Attributes present in the retrieved candidate set
- Useful distinctions that could reduce the search space

#### Flow Example:
```
User Query: "Goa trip during college with friends"
  ↓
Initial Result: [80 candidate photos]
  ↓ (System suggests: Beach, Restaurant, Hotel, Day, Night, Specific people, Approximate year, Activity)
User Selects: "Beach"
  ↓
Candidate Set: [32 photos]
  ↓
User Selects: "Rahul + Aman"
  ↓
Candidate Set: [9 photos]
  ↓
User Selects: "Evening"
  ↓
Candidate Set: [3 photos]
  ↓
User identifies and opens the intended photo!
```

> **Purpose:** Progressively eliminate irrelevant candidates until the intended photo becomes easy to identify.

---

### Feature 2: Smart Result Grouping & Disambiguation

#### What It Does
When a search returns a large number of relevant but similar photos, Google Photos should avoid presenting them as one long, undifferentiated grid.

Instead, the system automatically organizes the candidate set into meaningful groups based on attributes that help the user distinguish between photos.

#### Example Grouping:
Query: `"Goa trip during college"`  
Candidate Set organized under **Goa Trip · 2016**:
- **Beach** — 21 photos
- **Restaurants** — 12 photos
- **Night** — 16 photos
- **Rahul** — 18 photos
- **Selfies** — 9 photos

#### Grouping Dimensions:
Generated dynamically from the actual characteristics of the returned photo set:
- Scene or activity
- People present
- Location
- Time of day
- Sub-events
- Visual similarity
- Burst or near-duplicate photos

#### Progressive Narrowing via Groups:
```
76 candidate photos
  ↓ [Select: Beach]
21 photos
  ↓ [Select: Rahul]
7 photos
  ↓ [Select: Night]
3 photos
  ↓
Intended photo identified
```

#### Problem Solved:
Directly resolves **Result Overload and Photo Identification Failure**, eliminating excessive scrolling, photo-by-photo inspection, repetitive reformulation, and search abandonment.

---

## 3. MVP Product Behaviour & End-to-End Journey

The intended end-to-end journey operates as one unified flow:

```
[ Incomplete Memory ]
         ↓
User describes what they remember
         ↓
System interprets memory clues
         ↓
Candidate photos are retrieved from authoritative library
         ↓
User checks whether the intended photo is identifiable
         ↓
[ If Not Identifiable ] → System suggests meaningful refinement options & dynamic groups
         ↓
User adds / selects another clue or group
         ↓
Candidate set becomes narrower and more distinct
         ↓
Refinement continues only as needed
         ↓
[ Intended Photo Identified & Opened ]
```

The two features operate as **one connected retrieval journey** rather than disparate tools.

---

## 4. Technical Product Principles & System Architecture

The system intelligently retrieves and refines photos by combining:

$$\text{Natural-language User Input} + \text{Structured Photo Data} + \text{Semantic/Photo-derived Info} + \text{LLM-assisted Interpretation} \longrightarrow \text{Relevant Candidates} \longrightarrow \text{Progressive Refinement} \longrightarrow \text{Intended Photo}$$

### LLM Responsibility vs. Retrieval Responsibility

| Layer | Responsibilities | Forbidden Actions |
| :--- | :--- | :--- |
| **LLM Layer** | • Interprets user intent & vague-memory language<br>• Extracts contextual clues<br>• Proposes useful refinement language & suggestions<br>• Generates natural-language feedback and summaries | • **Must NEVER invent photos** or hallucinate content not in the corpus<br>• Must not act as source of truth for library existence |
| **Retrieval / Index Layer** | • Authoritative source of truth for photo existence<br>• Executes structured search against indexed library<br>• Computes candidate counts<br>• Identifies valid grouping attributes & active refinement options | • Must not retrieve external/unindexed items |

#### Pipeline Flow:
```
User Query 
  → LLM interprets query into structured retrieval request
  → Search executed against indexed project photo library
  → Candidate results & available metadata extracted
  → LLM/UI formats user-friendly response with valid refinement chips/groups
```

---

## 5. Google Photos UI Integration Requirements

The MVP must visually and functionally look and feel like the **real Google Photos iOS app running on an iPhone**, specifically within the **Search** tab.

- **Non-Goals / Prohibited UI:**
  - No generic chatbots or standalone chat windows
  - No generic desktop image search dashboards
  - No unrelated custom layouts or disconnected navigation
- **Required UI Specifications:**
  - **iOS Google Photos Shell:** Native iPhone proportions, status bar, home indicator, Google Photos typography, cards, spacing, icons, search bars, chips, and visual hierarchy.
  - **Bottom Navigation:** Fixed bottom bar featuring:
    1. **Photos** (Photo catalogue/gallery loaded from project directory)
    2. **Collections**
    3. **Create**
    4. **Search** (Primary MVP Entry Point)
  - **Embedded Experience:** Refinement chips, grouped clusters, and conversational feedback must live seamlessly within the Search tab.

---

## 6. Search Tab Experience & Query Handling States

The Search tab handles four distinct query states:

### State A: Relevant Photo-Retrieval Query With Results
- **Example:** `"Show me the beach photos from the Goa trip."`
- **Behavior:** 
  - Retrieves and displays matching candidate photos.
  - Activates Guided Search Refinement & Smart Grouping when candidates are plentiful.
  - Allows progressive drill-down until the target photo is selected.

### State B: Query Unrelated to Photo Retrieval
- **Example:** `"Who is the Prime Minister of India?"` or `"Write an email to my manager."`
- **Behavior:**
  - Gracefully declines to answer general knowledge or unrelated requests.
  - Concise response:
    > *"I can help you find photos from this library. Try describing a memory, person, place, event, object or approximate time."*
  - Provides clickable suggested queries derived strictly from the active photo library (e.g., `"Show me photos from the Goa trip"`, `"Find beach photos with Rahul"`).

### State C: Relevant Photo Query, But No Matching Photo Exists
- **Example:** `"Show me my Eiffel Tower photos."` (when none exist in library)
- **Behavior:**
  - Truthfully reports that no matching photos exist in the demo corpus (never hallucinates).
  - Concise response:
    > *"I couldn't find a matching photo in the current library. This MVP uses a smaller demo photo collection for now and can support a larger library in a future version."*
  - Surfaces clickable alternative searches that are guaranteed to yield results in the supplied corpus.

### State D: Relevant Query Is Too Broad or Ambiguous
- **Example:** `"Show me that photo with my friends."`
- **Behavior:**
  - Retrieves initial broad candidate set.
  - Avoids overwhelming long flat grids.
  - Prompts the user (`"Can you narrow it down?"`) and displays dynamic refinement chips/groups (e.g., Goa Trip, Beach, Rahul, Night, Selfies).
  - Selecting an option immediately updates the candidate set.

---

## 7. MVP Photo Library — Authoritative Data Source

The local photo library supplied inside the project workspace is the **sole authoritative photo corpus**.

### Grounding Rules:
- **Strictly Prohibited:** Searching the public internet, pulling stock images, generating synthetic/substitute images, hallucinating photo existence, or accessing personal Google Photos cloud accounts.
- **Traceability:** Every retrieved image and metadata label must map directly to an actual file on disk.

### Metadata & Indexing Attributes:
The system indexes and maintains searchable attributes from the library files:
- File path / filename
- Capture date & timestamp
- Location metadata (where available)
- People labels (supplied or detected)
- Event / context tags (e.g., trips, celebrations)
- Scene & activity classifications
- Objects & visual tags
- OCR / text (where relevant)
- Embeddings / semantic representations for similarity

### Smart Suggestion Grounding Rule:
All search suggestions, refinement chips, recovery queries, and disambiguation clusters must be verified by the index layer to ensure they match real photos and return at least $\ge 1$ candidate.

---

## 8. MVP Acceptance Criteria Checklist

- [ ] **1. Authentic iOS Shell:** User interacts with a realistic Google Photos iPhone interface with standard bottom navigation (Photos, Collections, Create, Search).
- [ ] **2. Authoritative Corpus Search:** Vague-memory queries search exclusively against the supplied project photo library.
- [ ] **3. Grounded Results:** All displayed photo cards and images strictly correspond to real local files.
- [ ] **4. Guided Search Refinement:** Contextual refinement chips dynamically suggest distinctions to narrow down broad results.
- [ ] **5. Smart Result Grouping:** Returned candidate sets can be clustered into logical sub-groups (scenes, people, time of day, activities).
- [ ] **6. Dynamic State Updates:** Selecting a refinement or group genuinely filters the candidate set in real-time.
- [ ] **7. Non-Photo Query Handling:** Unrelated queries are rejected politely with helpful photo search guidance.
- [ ] **8. Truthful Zero-Result State:** Queries with no matching images state no results were found without hallucinating.
- [ ] **9. Guaranteed Fallback Suggestions:** Zero-result screens provide clickable suggestions that are guaranteed to exist in the library.
- [ ] **10. Zero Fabrication:** The system never invents photo content, fake thumbnails, or false positive claims.
- [ ] **11. Consistent Native UX:** The Google Photos iOS design language is maintained across all screens, states, and flows.
