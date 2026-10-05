import React from 'react';
import { Image, FolderOpen, PlusSquare, Search } from 'lucide-react';

export type TabType = 'photos' | 'collections' | 'create' | 'search';

interface BottomTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="gp-bottom-nav" aria-label="Main Navigation">
      <button
        className={`nav-tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
        onClick={() => onTabChange('photos')}
      >
        <div className="tab-icon-wrapper">
          <Image size={20} />
        </div>
        <span>Photos</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'collections' ? 'active' : ''}`}
        onClick={() => onTabChange('collections')}
      >
        <div className="tab-icon-wrapper">
          <FolderOpen size={20} />
        </div>
        <span>Collections</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'create' ? 'active' : ''}`}
        onClick={() => onTabChange('create')}
      >
        <div className="tab-icon-wrapper">
          <PlusSquare size={20} />
        </div>
        <span>Create</span>
      </button>

      <button
        className={`nav-tab-btn ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => onTabChange('search')}
      >
        <div className="tab-icon-wrapper">
          <Search size={20} />
        </div>
        <span>Search</span>
      </button>
    </nav>
  );
};
