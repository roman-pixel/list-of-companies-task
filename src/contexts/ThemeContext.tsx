import { createContext, useLayoutEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

type ThemeContextType = {
  isDarkMode: boolean | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode',
  );

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useLayoutEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
