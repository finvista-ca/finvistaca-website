import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

export const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Completely remove from DOM after fade out completes (2.3 seconds total)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2300);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="logo-container">
        <img src="/finvista-logo.jpeg" alt="Finvista Logo" className="splash-logo" />
      </div>
    </div>
  );
};
