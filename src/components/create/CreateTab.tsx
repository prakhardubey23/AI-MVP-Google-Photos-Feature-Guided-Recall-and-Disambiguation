import React from 'react';
import { Grid, Sparkles, Video, Image as ImageIcon } from 'lucide-react';

export const CreateTab: React.FC = () => {
  return (
    <div className="screen-scroll-view">
      {/* Header */}
      <div style={{ padding: '16px 18px 12px 18px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700' }}>Create with AI</h1>
        <p style={{ fontSize: '12px', color: 'var(--gp-text-secondary)', marginTop: '4px' }}>
          Turn your library photos into collages, cinematic moments, and reels.
        </p>
      </div>

      <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '14px 16px',
          borderRadius: '16px',
          background: 'var(--gp-surface-variant)',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gp-gemini-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            <Sparkles size={22} />
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>Cinematic 3D Photo</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Add subtle depth & movement to memorable photos</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '14px 16px',
          borderRadius: '16px',
          background: 'var(--gp-surface-variant)',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(26, 115, 232, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a73e8'
          }}>
            <Grid size={22} />
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>Smart Collage</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>Combine related trip photos into artistic layouts</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '14px 16px',
          borderRadius: '16px',
          background: 'var(--gp-surface-variant)',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'rgba(52, 168, 83, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34a853'
          }}>
            <Video size={22} />
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>Highlight Video</div>
            <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)' }}>AI-curated video reel set to music</div>
          </div>
        </div>
      </div>
    </div>
  );
};
