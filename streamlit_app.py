import os
import sys
import streamlit as st
import streamlit.components.v1 as components

# ==============================================================================
# Streamlit App Page Configuration
# ==============================================================================
st.set_page_config(
    page_title="Google Photos · Vague-Memory Retrieval MVP",
    page_icon="✨",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Custom Streamlit Theme & Iframe Styling
st.markdown("""
<style>
    /* Hide Streamlit default top padding and header bar for immersive app view */
    .block-container {
        padding-top: 1.2rem;
        padding-bottom: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        max-width: 100%;
    }
    header[data-testid="stHeader"] {
        background: rgba(9, 10, 15, 0.8);
        backdrop-filter: blur(10px);
    }
    #MainMenu {visibility: visible;}
    footer {visibility: hidden;}

    /* Sidebar Styling */
    [data-testid="stSidebar"] {
        background-color: #0c0e14;
        border-right: 1px solid #222634;
    }
    
    .sidebar-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: linear-gradient(135deg, #1a73e8 0%, #8ab4f8 40%, #c58af9 75%, #f28b82 100%);
        color: #fff;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    .query-example-box {
        background: #171b26;
        border: 1px solid #2b3248;
        border-radius: 10px;
        padding: 10px 12px;
        margin-bottom: 8px;
        font-size: 12px;
        color: #e8eaed;
        transition: all 0.2s ease;
    }

    .query-example-box:hover {
        border-color: #8ab4f8;
        background: #1c2233;
    }

    .pill-tag {
        display: inline-block;
        padding: 2px 7px;
        border-radius: 6px;
        font-size: 10px;
        font-weight: 600;
        margin-right: 4px;
        margin-bottom: 4px;
        background: rgba(26, 115, 232, 0.15);
        color: #8ab4f8;
    }
</style>
""", unsafe_allow_html=True)

# ==============================================================================
# Sidebar: Project Guide, Architecture & Demo Query Presets
# ==============================================================================
with st.sidebar:
    st.markdown('<div class="sidebar-badge">✨ AI MVP DEMO</div>', unsafe_allow_html=True)
    st.title("Google Photos")
    st.subheader("Vague-Memory Retrieval Simulation")
    
    st.markdown("""
    This graduation MVP demonstrates how **Google Photos** can interpret imprecise, episodic, or partial memory queries using LLM intent extraction, grounded candidate retrieval, and guided multi-turn disambiguation.
    """)

    st.markdown("---")
    st.markdown("### 🔍 Try These Test Memories")

    test_queries = [
        {
            "query": "me with dog watching videos on laptop",
            "type": "Specific Episodic Memory",
            "match": "Siberian Husky on bed with MacBook"
        },
        {
            "query": "cricket match in indore with floodlights",
            "type": "Event & Place Memory",
            "match": "Holkar Stadium Jan 2020 Match"
        },
        {
            "query": "mba graduation batch photo on college stairs",
            "type": "Milestone / Group Photo",
            "match": "Class of 2023 Convocation"
        },
        {
            "query": "birthday cake celebration with candle for gunjan",
            "type": "Celebration Memory",
            "match": "Chocolate Brownie Plate"
        },
        {
            "query": "martial arts gym boxing gloves and punch bags",
            "type": "Activity / Scene",
            "match": "MMA & Kickboxing Workout"
        },
        {
            "query": "kids riding yak in snowy mountains",
            "type": "Vintage Childhood Travel",
            "match": "Sikkim Lake Yak Ride"
        },
        {
            "query": "who is the prime minister of india",
            "type": "Non-Photo Query (State B)",
            "match": "Graceful conversational redirection"
        }
    ]

    for item in test_queries:
        st.markdown(f"""
        <div class="query-example-box">
            <span class="pill-tag">{item['type']}</span><br/>
            <strong>"{item['query']}"</strong><br/>
            <span style="color:#9aa0a6; font-size: 11px;">→ {item['match']}</span>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("---")
    st.markdown("### ⚙️ System Highlights")
    st.markdown("""
    - **4-State Dialogue Routing**: Handles single matches, candidate sets, out-of-domain knowledge queries (State B), and zero results (State C).
    - **Entropy-Ranked Clarifications**: Generates progressive facet chips (e.g. *Morning vs Afternoon*, *Pune vs Indore*).
    - **Smart Result Grouping**: Visually clusters multi-match candidates into thematic cards.
    - **Interactive iOS App Shell**: Authentic iPhone 15 Pro frame with Photos, Collections, Create, and Search tabs.
    """)

# ==============================================================================
# Main Section: Embedded High-Fidelity React Component
# ==============================================================================
current_dir = os.path.dirname(os.path.abspath(__file__))
dist_dir = os.path.join(current_dir, "dist")

if not os.path.exists(dist_dir) or not os.path.exists(os.path.join(dist_dir, "index.html")):
    st.error("⚠️ Pre-built web application bundle not found in `dist/` directory.")
    st.info("Please build the frontend by running `npm run build` in your repository root before launching Streamlit.")
else:
    # Declare and render Streamlit custom component serving the pre-built React application
    google_photos_mvp = components.declare_component(
        "google_photos_vague_memory_mvp",
        path=dist_dir
    )

    # Render component
    google_photos_mvp(key="mvp_player")
