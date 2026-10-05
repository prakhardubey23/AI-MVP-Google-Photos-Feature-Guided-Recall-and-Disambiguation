import React from 'react';
import { PHOTO_LIBRARY } from '../../data/photoLibrary';
import { PhotoRecord } from '../../types/photo';

interface PhotosTabProps {
  onPhotoClick: (photo: PhotoRecord) => void;
}

export const PhotosTab: React.FC<PhotosTabProps> = ({ onPhotoClick }) => {
  // Group photos by Year + Month
  const groupedByMonth = React.useMemo(() => {
    const map = new Map<string, PhotoRecord[]>();
    
    // Sort descending by timestamp
    const sorted = [...PHOTO_LIBRARY].sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    sorted.forEach(photo => {
      const date = new Date(photo.timestamp);
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      const list = map.get(monthYear) || [];
      list.push(photo);
      map.set(monthYear, list);
    });

    return Array.from(map.entries());
  }, []);

  return (
    <div className="screen-scroll-view">
      {/* Top Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 18px',
        position: 'sticky',
        top: 0,
        background: 'var(--gp-surface-glass)',
        backdropFilter: 'blur(20px)',
        zIndex: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.3px' }}>Google</span>
          <span style={{ fontSize: '18px', fontWeight: '400', color: 'var(--gp-text-secondary)' }}>Photos</span>
        </div>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a73e8, #c58af9)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '600'
        }}>
          P
        </div>
      </div>

      {/* Chronological Month Sections */}
      <div className="photo-grid-container" style={{ padding: '8px 12px' }}>
        {groupedByMonth.map(([monthYear, photos]) => (
          <div key={monthYear} style={{ marginBottom: '20px' }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--gp-text-primary)',
              margin: '8px 4px 10px 4px'
            }}>
              {monthYear}
            </div>

            <div className="candidate-photo-grid">
              {photos.map(photo => (
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
        ))}
      </div>
    </div>
  );
};
