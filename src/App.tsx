import React, { useState } from 'react';
import { Sparkles, Moon, Sun, Smartphone, HelpCircle } from 'lucide-react';
import { IPhoneShell } from './components/common/IPhoneShell';
import { BottomTabBar, TabType } from './components/navigation/BottomTabBar';
import { PhotosTab } from './components/photos/PhotosTab';
import { CollectionsTab } from './components/collections/CollectionsTab';
import { CreateTab } from './components/create/CreateTab';
import { SearchScreen } from './components/search/SearchScreen';
import { PhotoDetailModal } from './components/photos/PhotoDetailModal';
import { PhotoRecord } from './types/photo';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('search');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoRecord | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle Dark/Light Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <div className="showcase-wrapper" data-theme={theme}>
      <div className="ambient-backdrop" />

      {/* Top Demo Showcase Bar */}
      <header className="demo-topbar">
        <div className="demo-title-group">
          <div className="gp-logo-badge">
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div>
            <div className="demo-title">Google Photos · Vague-Memory Retrieval MVP</div>
            <div className="demo-subtitle">iOS App Simulation with Guided Refinement & Smart Grouping</div>
          </div>
        </div>

        <div className="demo-actions">
          <button
            className="demo-btn"
            onClick={toggleTheme}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>
      </header>

      {/* Main iPhone 15 Pro Frame */}
      <IPhoneShell>
        {/* Tab Views */}
        {activeTab === 'photos' && (
          <PhotosTab onPhotoClick={setSelectedPhoto} />
        )}

        {activeTab === 'collections' && (
          <CollectionsTab />
        )}

        {activeTab === 'create' && (
          <CreateTab />
        )}

        {activeTab === 'search' && (
          <SearchScreen onPhotoClick={setSelectedPhoto} />
        )}

        {/* Bottom Navigation */}
        <BottomTabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Full-Screen Photo Detail Modal */}
        {selectedPhoto && (
          <PhotoDetailModal
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </IPhoneShell>
    </div>
  );
};

export default App;
