import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface IPhoneShellProps {
  children: React.ReactNode;
}

export const IPhoneShell: React.FC<IPhoneShellProps> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours % 12 || 12}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="iphone-frame">
      {/* Dynamic Island */}
      <div className="dynamic-island">
        <div className="island-camera" />
        <div className="island-sensor" />
      </div>

      {/* iOS Status Bar */}
      <div className="ios-status-bar">
        <span className="ios-time">{currentTime || '9:41'}</span>
        <div className="ios-status-right">
          <Signal size={13} strokeWidth={2.5} />
          <Wifi size={13} strokeWidth={2.5} />
          <Battery size={15} strokeWidth={2.5} />
        </div>
      </div>

      {/* App Main Viewport Container */}
      <div className="app-screen-container">
        {children}
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="ios-home-indicator" />
    </div>
  );
};
