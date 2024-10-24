// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="flex items-center cursor-pointer">
      <span className="mr-2">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        {/* Background of the toggle */}
        <div
          className={`block w-10 h-6 rounded-full transition-colors ${
            theme === 'light' ? 'bg-black' : 'bg-white'
          }`}
        ></div>

        {/* Toggle thumb */}
        <div
          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform transform ${
            theme === 'dark' ? 'translate-x-4 bg-black' : 'bg-white'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ThemeToggle;
