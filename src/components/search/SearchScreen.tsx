import React, { useState, useRef } from 'react';
import { Search, Sparkles, X, ArrowLeft, Loader2 } from 'lucide-react';
import { analyzeQueryWithGroq } from '../../services/groqService';
import {
  searchPhotoLibrary,
  calculateRefinements,
  applyRefinementFilters,
  generateDisambiguationClusters,
  generateCandidateClarification
} from '../../services/retrievalEngine';
import {
  PhotoRecord,
  SearchSessionState,
  RefinementChip,
  DisambiguationCluster
} from '../../types/photo';
import { SearchHome } from './SearchHome';
import { SearchResultsView } from './SearchResultsView';
import { StateBView } from './StateBView';
import { StateCView } from './StateCView';

interface SearchScreenProps {
  onPhotoClick: (photo: PhotoRecord) => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ onPhotoClick }) => {
  const [session, setSession] = useState<SearchSessionState>({
    rawQuery: '',
    activeQuery: '',
    analysis: null,
    initialCandidates: [],
    activeCandidates: [],
    activeFilters: [],
    availableRefinements: [],
    currentClarification: null,
    clusters: [],
    isLoading: false,
    error: null,
    selectedClusterId: null
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // Execute search flow
  const handleExecuteSearch = async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed) {
      setSession(prev => ({
        ...prev,
        rawQuery: '',
        activeQuery: '',
        analysis: null,
        initialCandidates: [],
        activeCandidates: [],
        activeFilters: [],
        availableRefinements: [],
        currentClarification: null,
        clusters: [],
        isLoading: false
      }));
      return;
    }

    setSession(prev => ({ ...prev, rawQuery: queryText, activeQuery: trimmed, isLoading: true, error: null }));

    try {
      // 1. LLM Query Intent & Entity Analysis
      const analysis = await analyzeQueryWithGroq(trimmed);

      // 2. Local Grounded Corpus Search
      let initialMatches: PhotoRecord[] = [];
      if (analysis.isPhotoQuery && analysis.state !== 'STATE_B') {
        initialMatches = searchPhotoLibrary(trimmed, analysis.parsedEntities);
      }

      // 3. State C Check (Truthful Zero-Result)
      if (analysis.isPhotoQuery && initialMatches.length === 0) {
        analysis.state = 'STATE_C';
        analysis.conversationalSummary = "I couldn't find a matching photo in the current library. This MVP uses a curated demo photo collection.";
        analysis.suggestedAlternativeSearches = [
          'Cricket match at Holkar stadium under floodlights',
          'Husky dog on bed watching laptop',
          'MBA graduation batch photo on college steps',
          'Birthday brownie with candle for Gunjan',
          'MMA boxing gym workout'
        ];
      }

      // 4. Candidate Set Disambiguation & Clarification
      const clarification = generateCandidateClarification(initialMatches, [], trimmed);
      const refinements = calculateRefinements(initialMatches, []);
      const clusters = generateDisambiguationClusters(initialMatches);

      setSession({
        rawQuery: queryText,
        activeQuery: trimmed,
        analysis,
        initialCandidates: initialMatches,
        activeCandidates: initialMatches,
        activeFilters: [],
        availableRefinements: refinements,
        currentClarification: clarification,
        clusters,
        isLoading: false,
        error: null,
        selectedClusterId: null
      });
    } catch (err: any) {
      setSession(prev => ({
        ...prev,
        isLoading: false,
        error: err.message || 'Search execution failed.'
      }));
    }
  };

  // Toggle Refinement Filter Chip
  const handleToggleFilter = (chip: RefinementChip) => {
    setSession(prev => {
      const exists = prev.activeFilters.some(f => f.id === chip.id);
      let updatedFilters: RefinementChip[];

      if (exists) {
        updatedFilters = prev.activeFilters.filter(f => f.id !== chip.id);
      } else {
        updatedFilters = [...prev.activeFilters, { ...chip, isSelected: true }];
      }

      // Recompute filtered candidate set
      const nextCandidates = applyRefinementFilters(prev.initialCandidates, updatedFilters);

      // Recalculate remaining entropy-ranked refinements and next clarification question
      const nextRefinements = calculateRefinements(nextCandidates, updatedFilters);
      const nextClarification = generateCandidateClarification(nextCandidates, updatedFilters, prev.activeQuery);

      return {
        ...prev,
        activeFilters: updatedFilters,
        activeCandidates: nextCandidates,
        availableRefinements: nextRefinements,
        currentClarification: nextClarification,
        selectedClusterId: null
      };
    });
  };

  // Clear all active refinement filters
  const handleClearFilters = () => {
    setSession(prev => {
      const nextRefinements = calculateRefinements(prev.initialCandidates, []);
      const nextClarification = generateCandidateClarification(prev.initialCandidates, [], prev.activeQuery);
      return {
        ...prev,
        activeFilters: [],
        activeCandidates: prev.initialCandidates,
        availableRefinements: nextRefinements,
        currentClarification: nextClarification,
        selectedClusterId: null
      };
    });
  };

  // Select Smart Group Cluster
  const handleSelectCluster = (cluster: DisambiguationCluster) => {
    const chip: RefinementChip = {
      id: `${cluster.facetType}-${cluster.filterValue.toLowerCase().replace(/\s+/g, '-')}`,
      label: cluster.title,
      facetType: cluster.facetType,
      value: cluster.filterValue,
      matchingCount: cluster.photoCount,
      isSelected: true
    };
    handleToggleFilter(chip);
  };

  const handleClearInput = () => {
    setSession({
      rawQuery: '',
      activeQuery: '',
      analysis: null,
      initialCandidates: [],
      activeCandidates: [],
      activeFilters: [],
      availableRefinements: [],
      currentClarification: null,
      clusters: [],
      isLoading: false,
      error: null,
      selectedClusterId: null
    });
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  return (
    <div className="screen-scroll-view">
      {/* Top Search Bar Header */}
      <div className="search-header-container">
        <div className="gp-search-bar">
          {session.activeQuery ? (
            <button className="search-sparkle-btn" onClick={handleClearInput} aria-label="Go back">
              <ArrowLeft size={18} color="var(--gp-text-secondary)" />
            </button>
          ) : (
            <button className="search-sparkle-btn" aria-label="Ask Photos">
              <Sparkles size={18} color="var(--gp-blue)" />
            </button>
          )}

          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder='Ask Photos or describe a memory...'
            value={session.rawQuery}
            onChange={(e) => setSession(prev => ({ ...prev, rawQuery: e.target.value }))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleExecuteSearch(session.rawQuery);
              }
            }}
          />

          {session.isLoading ? (
            <Loader2 size={18} className="animate-spin" color="var(--gp-blue)" />
          ) : session.rawQuery ? (
            <button className="search-action-btn" onClick={handleClearInput} aria-label="Clear search">
              <X size={16} />
            </button>
          ) : (
            <button
              className="search-action-btn"
              onClick={() => handleExecuteSearch(session.rawQuery)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Main Content State Switcher */}
      {!session.activeQuery ? (
        /* 1. Default Search Home */
        <SearchHome
          onSearchPrompt={(prompt) => {
            setSession(prev => ({ ...prev, rawQuery: prompt }));
            handleExecuteSearch(prompt);
          }}
          onPhotoClick={onPhotoClick}
        />
      ) : session.isLoading ? (
        /* 2. Loading State */
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 20px',
          gap: '12px',
          color: 'var(--gp-text-secondary)'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'var(--gp-gemini-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 14px var(--gp-gemini-glow)'
          }}>
            <Sparkles size={22} className="animate-pulse" />
          </div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--gp-text-primary)' }}>
            Searching your photo library...
          </div>
          <div style={{ fontSize: '11px' }}>Interpreting vague memories with Gemini</div>
        </div>
      ) : session.analysis?.state === 'STATE_B' ? (
        /* 3. State B: Non-Photo Query Handler */
        <StateBView
          message={session.analysis.conversationalSummary}
          suggestedSearches={session.analysis.suggestedAlternativeSearches || []}
          onSelectSuggestion={(q) => {
            setSession(prev => ({ ...prev, rawQuery: q }));
            handleExecuteSearch(q);
          }}
        />
      ) : (session.analysis?.state === 'STATE_C' || session.activeCandidates.length === 0) ? (
        /* 4. State C: Truthful Zero-Result Handler */
        <StateCView
          message={session.analysis?.conversationalSummary || "I couldn't find a matching photo in the current library. This MVP uses a smaller demo photo collection for now."}
          suggestedSearches={session.analysis?.suggestedAlternativeSearches || [
            'Cricket match at Holkar stadium',
            'Husky dog lying on bed with laptop',
            'MBA graduation batch photo on stairs',
            'MMA boxing gym with heavy bags'
          ]}
          onSelectSuggestion={(q) => {
            setSession(prev => ({ ...prev, rawQuery: q }));
            handleExecuteSearch(q);
          }}
        />
      ) : (
        /* 5. State A / State D: Active Candidate Results View */
        <SearchResultsView
          analysis={session.analysis}
          activeCandidates={session.activeCandidates}
          activeFilters={session.activeFilters}
          availableRefinements={session.availableRefinements}
          clusters={session.clusters}
          currentClarification={session.currentClarification}
          selectedClusterId={session.selectedClusterId}
          onToggleFilter={handleToggleFilter}
          onClearFilters={handleClearFilters}
          onSelectCluster={handleSelectCluster}
          onPhotoClick={onPhotoClick}
        />
      )}
    </div>
  );
};
