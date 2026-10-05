import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Streamlit iframe communication helper
if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
  const notifyStreamlit = () => {
    window.parent.postMessage({
      isStreamlitMessage: true,
      type: 'streamlit:componentReady',
      apiVersion: 1,
    }, '*');
    window.parent.postMessage({
      isStreamlitMessage: true,
      type: 'streamlit:setFrameHeight',
      height: Math.max(document.documentElement.scrollHeight || 0, 960),
    }, '*');
  };

  notifyStreamlit();
  window.addEventListener('load', notifyStreamlit);
  window.addEventListener('resize', notifyStreamlit);
  window.addEventListener('message', (e) => {
    if (e.data && (e.data.type === 'streamlit:render' || e.data.isStreamlitMessage)) {
      notifyStreamlit();
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

