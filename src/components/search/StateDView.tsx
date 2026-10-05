import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

interface StateDViewProps {
  promptText?: string;
  totalMatches: number;
}

export const StateDView: React.FC<StateDViewProps> = ({
  promptText,
  totalMatches
}) => {
  return (
    <div style={{
      margin: '8px 16px 12px 16px',
      padding: '12px 14px',
      borderRadius: '16px',
      background: 'var(--gp-blue-subtle)',
      border: '1px solid var(--gp-blue-border)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'var(--gp-blue)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <HelpCircle size={20} />
      </div>

      <div>
        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--gp-blue)' }}>
          {promptText || 'Can you narrow it down?'}
        </div>
        <div style={{ fontSize: '11px', color: 'var(--gp-text-secondary)', marginTop: '2px' }}>
          Found {totalMatches} photos. Tap a refinement chip or grouping below to find the exact photo.
        </div>
      </div>
    </div>
  );
};
