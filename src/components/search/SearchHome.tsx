import React from 'react';
import { Sparkles, Trophy, Dog, GraduationCap, Flame, Dumbbell, Compass, Heart } from 'lucide-react';
import { PHOTO_LIBRARY } from '../../data/photoLibrary';
import { PhotoRecord } from '../../types/photo';

interface SearchHomeProps {
  onSearchPrompt: (query: string) => void;
  onPhotoClick: (photo: PhotoRecord) => void;
}

export const SearchHome: React.FC<SearchHomeProps> = ({ onSearchPrompt, onPhotoClick: _onPhotoClick }) => {
  // Key people avatars based on authentic library identities
  const keyPeople = [
    {
      name: 'Gunjan',
      subtitle: 'Birthday Brownie',
      photo: PHOTO_LIBRARY.find(p => p.people.includes('Gunjan'))
    },
    {
      name: 'Prakhar',
      subtitle: 'SPPU Document',
      photo: PHOTO_LIBRARY.find(p => p.people.includes('Prakhar Dubey'))
    },
    {
      name: 'Sri Sri',
      subtitle: 'Ashram Satsang',
      photo: PHOTO_LIBRARY.find(p => p.people.includes('Sri Sri Ravi Shankar'))
    },
    {
      name: 'Babli',
      subtitle: 'Vintage Archive',
      photo: PHOTO_LIBRARY.find(p => p.people.includes('Babli (handwritten note)'))
    }
  ];

  // Authentic vague-memory prompt examples
  const curatedMemories = [
    'That cricket match at Holkar stadium under floodlights',
    'Lying on bed with the husky dog watching laptop',
    'MBA batch graduation photo on the grand college steps',
    'Birthday chocolate brownie with candle for Gunjan',
    'MMA gym workout with red boxing gloves and heavy bags',
    'Childhood photo riding a decorated yak at snow lake in Sikkim'
  ];

  return (
    <div className="search-home-section">
      {/* Ask Photos Hero Section */}
      <div className="search-home-hero">
        <div className="ask-photos-hero-badge">
          <Sparkles size={14} />
          <span>Ask Photos with Gemini</span>
        </div>
        <h2 className="search-home-hero-title">Find what you remember</h2>
        <p className="search-home-hero-sub">
          Search using natural memory clues like events, pets, places, objects, or approximate years.
        </p>
      </div>

      {/* Suggested Memory Prompts */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'var(--gp-text-secondary)',
          marginBottom: '10px'
        }}>
          Try vague memory searches
        </div>

        <div className="search-prompts-list">
          {curatedMemories.map((prompt, idx) => (
            <button
              key={idx}
              className="search-prompt-item"
              onClick={() => onSearchPrompt(prompt)}
            >
              <Sparkles size={14} color="#1a73e8" style={{ flexShrink: 0 }} />
              <span>"{prompt}"</span>
            </button>
          ))}
        </div>
      </div>

      {/* People & Identifiers */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'var(--gp-text-secondary)',
          marginBottom: '8px'
        }}>
          Identified in this library
        </div>

        <div className="people-faces-row">
          {keyPeople.map((person, idx) => (
            <div
              key={idx}
              className="people-face-item"
              onClick={() => onSearchPrompt(person.name)}
            >
              <img
                src={person.photo?.url || PHOTO_LIBRARY[0].url}
                alt={person.name}
                className="people-face-avatar"
              />
              <span className="people-face-name">{person.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories & Contexts */}
      <div>
        <div style={{
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'var(--gp-text-secondary)',
          marginBottom: '10px'
        }}>
          Explore by context
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          <button
            className="search-prompt-item"
            style={{ padding: '8px 12px' }}
            onClick={() => onSearchPrompt('Cricket match at Holkar stadium')}
          >
            <Trophy size={16} color="#1a73e8" />
            <span>Cricket Stadium</span>
          </button>
          <button
            className="search-prompt-item"
            style={{ padding: '8px 12px' }}
            onClick={() => onSearchPrompt('Husky dog on bed with laptop')}
          >
            <Dog size={16} color="#34a853" />
            <span>Husky Pet Moments</span>
          </button>
          <button
            className="search-prompt-item"
            style={{ padding: '8px 12px' }}
            onClick={() => onSearchPrompt('MBA batch graduation on college steps')}
          >
            <GraduationCap size={16} color="#c58af9" />
            <span>MBA Graduation</span>
          </button>
          <button
            className="search-prompt-item"
            style={{ padding: '8px 12px' }}
            onClick={() => onSearchPrompt('MMA gym boxing workout')}
          >
            <Dumbbell size={16} color="#ea4335" />
            <span>MMA & Boxing Gym</span>
          </button>
        </div>
      </div>
    </div>
  );
};
