import React from 'react';
import { SearchX, Sparkles, Image } from 'lucide-react';

interface StateCViewProps {
  message: string;
  suggestedSearches: string[];
  onSelectSuggestion: (query: string) => void;
}

export const StateCView: React.FC<StateCViewProps> = ({
  message,
  suggestedSearches,
  onSelectSuggestion
}) => {
  return (
    <div className="fallback-state-card">
      <div className="fallback-icon-circle" style={{ color: 'var(--gp-text-secondary)', background: 'var(--gp-surface)' }}>
        <SearchX size={24} />
      </div>

      <div className="fallback-title">No Matching Photos Found</div>
      
      <p className="fallback-description">
        {message || "I couldn't find a matching photo in the current library. This MVP uses a smaller demo photo collection for now and can support a larger library in a future version."}
      </p>

      {suggestedSearches.length > 0 && (
        <div>
          <div className="fallback-suggestions-header">
            <Sparkles size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px', color: 'var(--gp-blue)' }} />
            Try one of these instead:
          </div>

          <div className="fallback-suggestion-pills">
            {suggestedSearches.map((s, idx) => (
              <button
                key={idx}
                className="fallback-pill-btn"
                onClick={() => onSelectSuggestion(s)}
              >
                <Image size={14} color="#1a73e8" />
                <span>{s}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
