import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition
                 focus:ring-blue-500 dark:focus:ring-yellow-500 bg-blue-500 dark:bg-yellow-500
                 text-white dark:text-black"
    >
      {isDarkMode ? (
        <FaSun className="w-6 h-6 text-yellow-500" />
      ) : (
        <FaMoon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeChanger;
