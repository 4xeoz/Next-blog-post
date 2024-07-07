'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className=" cursor-pointer flex items-center justify-center"
    >
      {theme === 'light' ? (
        <Image src="/assets/moon.svg" alt="Dark mode" width={24} height={24}  />
      ) : (
        <Image src="/assets/sun.svg" alt="Light mode" width={24} height={24} className=' filter dark:invert'/>
      )}
    </button>
  );
};

export default ThemeToggle;
