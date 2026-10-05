import React, { useState } from 'react';
import { ChevronDown, Share2, Star, Info, Trash2, Sparkles, MapPin, Calendar, Clock, Users, Eye } from 'lucide-react';
import { PhotoRecord } from '../../types/photo';

interface PhotoDetailModalProps {
  photo: PhotoRecord;
  onClose: () => void;
}

export const PhotoDetailModal: React.FC<PhotoDetailModalProps> = ({ photo, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullExif, setShowFullExif] = useState(true);

  return (
    <div className="photo-detail-overlay" role="dialog" aria-modal="true">
      {/* Detail Top Bar */}
      <div className="detail-topbar">
        <button className="detail-icon-btn" onClick={onClose} aria-label="Close photo">
          <ChevronDown size={22} />
        </button>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className="detail-icon-btn"
            onClick={() => setIsFavorite(!isFavorite)}
            style={{ color: isFavorite ? '#f9ab00' : '#ffffff' }}
            aria-label="Favorite photo"
          >
            <Star size={18} fill={isFavorite ? '#f9ab00' : 'none'} />
          </button>
          <button
            className="detail-icon-btn"
            onClick={() => setShowFullExif(!showFullExif)}
            aria-label="Toggle details"
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Main Photo Center Container */}
      <div className="detail-image-container" onClick={() => setShowFullExif(!showFullExif)}>
        <img
          src={photo.url}
          alt={photo.caption}
          className="detail-main-image"
          onError={(e) => {
            // Fallback gracefully if image path needs fallback
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="%238ab4f8" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
          }}
        />
      </div>

      {/* Slide-Up EXIF & Memory Drawer */}
      {showFullExif && (
        <div className="detail-bottom-drawer">
          <div className="drawer-drag-pill" />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="drawer-date">{photo.dateDisplay}</div>
              <div className="drawer-location">
                <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                {photo.location.placeName || photo.location.city || 'India'}
                {photo.location.city ? `, ${photo.location.city}` : ''}
              </div>
            </div>
            {photo.visualCharacteristics.isBurstCandidate && (
              <span className="drawer-tag-pill" style={{ background: 'rgba(234, 67, 53, 0.2)', color: '#f28b82' }}>
                Burst Sequence
              </span>
            )}
          </div>

          <p className="drawer-caption">{photo.caption}</p>

          {photo.memoryStory && (
            <div style={{
              marginTop: '10px',
              padding: '8px 12px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.06)',
              fontSize: '11px',
              color: '#bdc1c6',
              lineHeight: '1.4'
            }}>
              <strong style={{ color: '#8ab4f8' }}>Memory Context: </strong>
              {photo.memoryStory}
            </div>
          )}

          {/* Tag Pills */}
          <div className="drawer-tags-row">
            {photo.eventContext.map((ev, i) => (
              <span key={i} className="drawer-tag-pill" style={{ background: 'rgba(26, 115, 232, 0.25)', color: '#8ab4f8' }}>
                {ev}
              </span>
            ))}
            {photo.people.map((p, i) => (
              <span key={i} className="drawer-tag-pill" style={{ background: 'rgba(197, 138, 249, 0.25)', color: '#c58af9' }}>
                <Users size={10} style={{ display: 'inline', marginRight: '3px', verticalAlign: '-1px' }} />
                {p}
              </span>
            ))}
            {photo.scenes.map((s, i) => (
              <span key={i} className="drawer-tag-pill">
                {s}
              </span>
            ))}
            <span className="drawer-tag-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#9aa0a6' }}>
              <Clock size={10} style={{ display: 'inline', marginRight: '3px', verticalAlign: '-1px' }} />
              {photo.timeOfDay}
            </span>
          </div>

          {/* Detail Bottom Action Bar */}
          <div className="detail-actions-bar">
            <button className="detail-action-item" onClick={() => alert('Shared link to photo!')}>
              <Share2 size={18} />
              <span>Share</span>
            </button>
            <button className="detail-action-item" onClick={() => setIsFavorite(!isFavorite)}>
              <Star size={18} fill={isFavorite ? '#f9ab00' : 'none'} color={isFavorite ? '#f9ab00' : '#e8eaed'} />
              <span>Favorite</span>
            </button>
            <button className="detail-action-item" onClick={() => alert('Google Lens: Analyzing visual objects')}>
              <Sparkles size={18} color="#8ab4f8" />
              <span>Ask Photos</span>
            </button>
            <button className="detail-action-item" onClick={() => alert('Trash action disabled in demo MVP')}>
              <Trash2 size={18} />
              <span>Trash</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
