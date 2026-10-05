import React from 'react';
import { Layers } from 'lucide-react';
import { DisambiguationCluster, PhotoRecord } from '../../types/photo';

interface SmartGroupSectionProps {
  clusters: DisambiguationCluster[];
  selectedClusterId: string | null;
  onSelectCluster: (cluster: DisambiguationCluster) => void;
  onPhotoClick: (photo: PhotoRecord) => void;
}

export const SmartGroupSection: React.FC<SmartGroupSectionProps> = ({
  clusters,
  selectedClusterId,
  onSelectCluster
}) => {
  if (clusters.length === 0) return null;

  return (
    <div className="smart-groups-section">
      <div className="smart-groups-title">
        <Layers size={14} color="#1a73e8" />
        <span>Smart Groupings & Moments</span>
      </div>

      <div className="cluster-cards-carousel">
        {clusters.map(cluster => {
          const isSelected = selectedClusterId === cluster.id;
          return (
            <div
              key={cluster.id}
              className={`cluster-card ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectCluster(cluster)}
            >
              <div className="cluster-thumbnail-wrapper">
                <img
                  src={cluster.representativePhoto.url}
                  alt={cluster.title}
                  className="cluster-thumbnail"
                  loading="lazy"
                />
                <span className="cluster-count-tag">
                  {cluster.photoCount}
                </span>
              </div>
              <div className="cluster-card-body">
                <div className="cluster-card-title">{cluster.title}</div>
                <div className="cluster-card-sub">{cluster.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
