import { Dispatch, ReactNode, SetStateAction } from 'react';

import { ThemeEnum } from '~/constants/theme.constants';

import { ScreenProvider } from './screen';
import { ThemeProvider } from './theme';

type AppProviderProps = {
  children: ReactNode;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
  theme: ThemeEnum | null;
};

export function AppProvider({ children, setTheme, theme }: AppProviderProps) {
  return (
    <ScreenProvider>
      <ThemeProvider setTheme={setTheme} theme={theme}>
        {children}
      </ThemeProvider>
    </ScreenProvider>
  );
}
