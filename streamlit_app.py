import os
import sys
import streamlit as st
import streamlit.components.v1 as components

# ==============================================================================
# Streamlit App Page Configuration (Clean Full-Screen View)
# ==============================================================================
st.set_page_config(
    page_title="Google Photos · Vague-Memory Retrieval MVP",
    page_icon="✨",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom Streamlit Theme & Iframe Styling (Hides sidebar and default headers)
st.markdown("""
<style>
    /* Completely hide Streamlit header and sidebar for clean standalone app view */
    header[data-testid="stHeader"] {
        display: none !important;
    }
    [data-testid="stSidebar"] {
        display: none !important;
    }
    [data-testid="collapsedControl"] {
        display: none !important;
    }
    #MainMenu {
        visibility: hidden !important;
    }
    footer {
        visibility: hidden !important;
    }

    /* Full width and zero padding for seamless React integration */
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }

    iframe {
        width: 100% !important;
        border: none !important;
    }
</style>
""", unsafe_allow_html=True)

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
