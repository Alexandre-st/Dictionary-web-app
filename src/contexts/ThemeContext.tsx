import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeTypes } from '../types/themeTypes';

const ThemeContext = createContext<ThemeTypes | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>(() => {
    // Check if the window object is available
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
    }

    // To use the system theme as the fallback theme
    if (typeof window !== 'undefined') {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }

    // If the window object is not available, return the default theme
    return 'light';
  });

  // Set the theme value and save it to localStorage
  const setThemeValue = (value: string) => {
    setTheme(value);
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  };

  // Set the theme on initial render
  const toggleTheme = () => {
    setThemeValue(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeValue(userPrefersDark ? 'dark' : 'light');
    }

    // To watch for changes in the system theme
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (evt: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setThemeValue(evt.matches ? 'dark' : 'light');
      }
    };
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeProvider, useTheme };
