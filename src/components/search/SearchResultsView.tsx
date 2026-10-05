import React from 'react';
import { Sparkles, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import {
  PhotoRecord,
  RefinementChip,
  DisambiguationCluster,
  QueryAnalysisResult,
  ClarificationQuestion
} from '../../types/photo';
import { RefinementChipBar } from './RefinementChipBar';
import { SmartGroupSection } from './SmartGroupSection';

interface SearchResultsViewProps {
  analysis: QueryAnalysisResult | null;
  activeCandidates: PhotoRecord[];
  activeFilters: RefinementChip[];
  availableRefinements: RefinementChip[];
  clusters: DisambiguationCluster[];
  currentClarification: ClarificationQuestion | null;
  selectedClusterId: string | null;
  onToggleFilter: (chip: RefinementChip) => void;
  onClearFilters: () => void;
  onSelectCluster: (cluster: DisambiguationCluster) => void;
  onPhotoClick: (photo: PhotoRecord) => void;
}

export const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  analysis,
  activeCandidates,
  activeFilters,
  availableRefinements,
  clusters,
  currentClarification,
  selectedClusterId,
  onToggleFilter,
  onClearFilters,
  onSelectCluster,
  onPhotoClick
}) => {
  const isSingleMatch = activeCandidates.length === 1;

  return (
    <div>
      {/* Ask Photos Conversational Summary & Clarification Card */}
      {analysis?.conversationalSummary && (
        <div className="ask-photos-summary-card">
          <div className="summary-card-header">
            <span className="gemini-sparkle-pill">
              <Sparkles size={10} />
              Ask Photos
            </span>
          </div>
          <p className="summary-card-text">
            {analysis.conversationalSummary}
          </p>

          {/* Dynamic Next Clarification Question (Candidate Set Analysis) */}
          {!isSingleMatch && currentClarification && (
            <div style={{
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(138, 180, 248, 0.25)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--gp-blue)',
                marginBottom: '8px'
              }}>
                <HelpCircle size={14} />
                <span>{currentClarification.question}</span>
              </div>

              {/* Direct Clarification Answer Chips */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px'
              }}>
                {currentClarification.options.map(opt => (
                  <button
                    key={opt.id}
                    className="refinement-chip"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderColor: 'rgba(138, 180, 248, 0.5)',
                      padding: '5px 10px',
                      fontSize: '11px',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    onClick={() => onToggleFilter(opt)}
                  >
                    <span>{opt.label}</span>
                    <span className="chip-count-badge">{opt.matchingCount}</span>
                    <ArrowRight size={10} style={{ opacity: 0.7 }} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Guided Search Refinement Chips */}
      {!isSingleMatch && (
        <RefinementChipBar
          availableRefinements={availableRefinements}
          activeFilters={activeFilters}
          onToggleFilter={onToggleFilter}
          onClearFilters={onClearFilters}
        />
      )}

      {/* Smart Result Groupings & Disambiguation */}
      {!isSingleMatch && clusters.length > 0 && activeFilters.length === 0 && (
        <SmartGroupSection
          clusters={clusters}
          selectedClusterId={selectedClusterId}
          onSelectCluster={onSelectCluster}
          onPhotoClick={onPhotoClick}
        />
      )}

      {/* Results Candidate View */}
      {isSingleMatch ? (
        /* Single Candidate Direct Match Highlight Card */
        <div className="single-candidate-highlight" onClick={() => onPhotoClick(activeCandidates[0])} style={{ cursor: 'pointer' }}>
          <div className="highlight-image-wrapper">
            <img
              src={activeCandidates[0].url}
              alt={activeCandidates[0].caption}
              className="highlight-image"
            />
          </div>
          <div className="highlight-body">
            <div className="highlight-match-tag">
              <CheckCircle2 size={13} />
              Exact Match Identified
            </div>
            <div className="highlight-title">{activeCandidates[0].dateDisplay} · {activeCandidates[0].location.placeName || activeCandidates[0].location.city || 'India'}</div>
            <div className="highlight-caption">{activeCandidates[0].caption}</div>
          </div>
        </div>
      ) : (
        /* Standard Candidate Grid */
        <div className="photo-grid-container">
          <div className="photo-grid-section-header">
            <span>Results ({activeCandidates.length})</span>
            {activeFilters.length > 0 && (
              <span style={{ fontSize: '11px', color: 'var(--gp-blue)' }}>Filtered</span>
            )}
          </div>

          <div className="candidate-photo-grid">
            {activeCandidates.map(photo => (
              <div
                key={photo.id}
                className="photo-cell"
                onClick={() => onPhotoClick(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="photo-cell-image"
                  loading="lazy"
                />
                {photo.visualCharacteristics.isBurstCandidate && (
                  <span className="photo-cell-badge">Burst</span>
                )}
                {photo.visualCharacteristics.isSelfie && (
                  <span className="photo-cell-badge" style={{ left: '4px', right: 'auto' }}>Selfie</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
