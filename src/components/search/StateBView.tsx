import React from 'react';
import { Search, Sparkles, Compass } from 'lucide-react';

interface StateBViewProps {
  message: string;
  suggestedSearches: string[];
  onSelectSuggestion: (query: string) => void;
}

export const StateBView: React.FC<StateBViewProps> = ({
  message,
  suggestedSearches,
  onSelectSuggestion
}) => {
  return (
    <div className="fallback-state-card">
      <div className="fallback-icon-circle">
        <Compass size={24} />
      </div>

      <div className="fallback-title">Photo Retrieval Assistant</div>
      
      <p className="fallback-description">
        {message || 'I can help you find photos from this library. Try describing a memory, person, place, event, object or approximate time.'}
      </p>

      {suggestedSearches.length > 0 && (
        <div>
          <div className="fallback-suggestions-header">
            <Sparkles size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px', color: 'var(--gp-blue)' }} />
            Try searching your library for:
          </div>

          <div className="fallback-suggestion-pills">
            {suggestedSearches.map((s, idx) => (
              <button
                key={idx}
                className="fallback-pill-btn"
                onClick={() => onSelectSuggestion(s)}
              >
                <Search size={14} color="#1a73e8" />
                <span>{s}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
