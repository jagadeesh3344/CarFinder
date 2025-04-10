import React, { useState, useEffect } from 'react';
import styles from '../pages/index.module.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  };

  // Debug logging
  useEffect(() => {
    console.log('Current dark mode state:', darkMode);
    console.log('Document classes:', document.documentElement.classList);
    console.log('Document attributes:', document.documentElement.attributes);
    console.log('Computed body color:', getComputedStyle(document.body).color);
    console.log('Computed body background:', getComputedStyle(document.body).backgroundColor);
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={styles.toggleButton}
      style={{
        backgroundColor: darkMode ? 'var(--dark-card-bg)' : 'var(--card-bg)',
        color: darkMode ? 'var(--dark-text)' : 'var(--text)'
      }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      data-testid="dark-mode-toggle"
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-9 0h-1m-2 9c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;