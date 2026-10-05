import React from 'react';
import { Users, MapPin, Heart, Film } from 'lucide-react';
import { PHOTO_LIBRARY } from '../../data/photoLibrary';

export const CollectionsTab: React.FC = () => {
  const albums = [
    { title: 'Holkar Stadium Match 2020', count: 9, photo: PHOTO_LIBRARY.find(p => p.id === 'photo-202001-01') },
    { title: 'MBA Batch & Convocation', count: 17, photo: PHOTO_LIBRARY.find(p => p.id === 'photo-202303-01') },
    { title: 'MMA Gym & Kickboxing', count: 4, photo: PHOTO_LIBRARY.find(p => p.id === 'photo-202212-01') },
    { title: 'Art of Living Ashram', count: 4, photo: PHOTO_LIBRARY.find(p => p.id === 'photo-202202-03') },
    { title: 'Childhood & Sikkim Yak Ride', count: 3, photo: PHOTO_LIBRARY.find(p => p.id === 'photo-202308-03') }
  ];

  return (
    <div className="screen-scroll-view">
      {/* Header */}
      <div style={{ padding: '16px 18px 8px 18px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Collections</h1>
      </div>

      {/* Primary Category Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
        padding: '8px 16px'
      }}>
        <div style={{
          background: 'var(--gp-surface-variant)',
          borderRadius: '16px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Users size={22} color="#1a73e8" />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>People & Pets</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Husky, Classmates, Family...</div>
          </div>
        </div>

        <div style={{
          background: 'var(--gp-surface-variant)',
          borderRadius: '16px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <MapPin size={22} color="#34a853" />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>Places</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Indore, Bengaluru, Sikkim, Pune...</div>
          </div>
        </div>

        <div style={{
          background: 'var(--gp-surface-variant)',
          borderRadius: '16px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Heart size={22} color="#ea4335" />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>Favorites</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Star-marked memories</div>
          </div>
        </div>

        <div style={{
          background: 'var(--gp-surface-variant)',
          borderRadius: '16px',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Film size={22} color="#f9ab00" />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '600' }}>Highlight Reels</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Auto-curated sequences</div>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div style={{ padding: '16px 18px 8px 18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '600' }}>Albums</h2>
          <span style={{ fontSize: '12px', color: 'var(--gp-blue)', fontWeight: '600' }}>View all</span>
        </div>

        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
          {albums.map((album, idx) => (
            <div key={idx} style={{
              minWidth: '140px',
              maxWidth: '140px',
              borderRadius: '14px',
              overflow: 'hidden',
              background: 'var(--gp-surface-variant)',
              flexShrink: 0
            }}>
              <img
                src={album.photo?.url || PHOTO_LIBRARY[0].url}
                alt={album.title}
                style={{ width: '100%', height: '110px', objectFit: 'cover' }}
              />
              <div style={{ padding: '8px 10px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{album.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--gp-text-secondary)' }}>{album.count} items</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
