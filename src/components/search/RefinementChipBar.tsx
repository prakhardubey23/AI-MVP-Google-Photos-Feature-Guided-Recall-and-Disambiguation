import React from 'react';
import { X, Sparkles, Plus } from 'lucide-react';
import { RefinementChip } from '../../types/photo';

interface RefinementChipBarProps {
  availableRefinements: RefinementChip[];
  activeFilters: RefinementChip[];
  onToggleFilter: (chip: RefinementChip) => void;
  onClearFilters: () => void;
}

export const RefinementChipBar: React.FC<RefinementChipBarProps> = ({
  availableRefinements,
  activeFilters,
  onToggleFilter,
  onClearFilters
}) => {
  return (
    <div className="refinement-section">
      {/* Active Filter Stack Breadcrumbs */}
      {activeFilters.length > 0 && (
        <div className="active-filters-bar" style={{ borderRadius: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--gp-text-secondary)', fontWeight: '600' }}>Active:</span>
          {activeFilters.map(filter => (
            <span key={filter.id} className="active-filter-pill">
              {filter.label}
              <button
                className="remove-filter-btn"
                onClick={() => onToggleFilter(filter)}
                aria-label={`Remove filter ${filter.label}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <button className="clear-all-filters-btn" onClick={onClearFilters}>
            Reset
          </button>
        </div>
      )}

      {/* Available Guided Refinement Suggestions */}
      {availableRefinements.length > 0 && (
        <div>
          <div className="refinement-header-row">
            <span className="refinement-section-title">
              <Sparkles size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px', color: 'var(--gp-blue)' }} />
              Guided Refinement
            </span>
            <span className="refinement-count-indicator">
              Narrow down
            </span>
          </div>

          <div className="chips-horizontal-scroll">
            {availableRefinements.map(chip => (
              <button
                key={chip.id}
                className={`refinement-chip ${chip.isSelected ? 'active' : ''}`}
                onClick={() => onToggleFilter(chip)}
              >
                <Plus size={11} strokeWidth={2.5} />
                <span>{chip.label}</span>
                <span className="chip-count-badge">{chip.matchingCount}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
