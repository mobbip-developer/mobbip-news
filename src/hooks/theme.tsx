import {
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  ReactNode,
  useEffect,
  Dispatch,
} from 'react';

import { ThemeConfigEnum, ThemeEnum } from '../constants/theme.constants';

type ThemeProviderProps = {
  children: ReactNode;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
  theme: ThemeEnum;
};

type ThemeContextData = {
  theme: ThemeEnum | null;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({
  children,
  theme,
  setTheme,
}: ThemeProviderProps) => {
  const handleSetTheme = useCallback((rawTheme: string) => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;

      root.setAttribute('data-theme', rawTheme);
      root.setAttribute('style', `color-scheme: ${rawTheme}`);

      localStorage.setItem(ThemeConfigEnum.localStorageKey, rawTheme);
    }
  }, []);

  const toggleTheme = useCallback(
    () =>
      setTheme(oldTheme =>
        oldTheme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT,
      ),
    [setTheme],
  );

  useEffect(() => {
    if (theme) {
      handleSetTheme(theme);
    }
  }, [theme, setTheme, handleSetTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === ThemeEnum.DARK,
        isLight: theme === ThemeEnum.LIGHT,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
};
