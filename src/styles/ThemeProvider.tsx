import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import { useAmp } from 'next/amp';

import { AppProvider } from '~/hooks';
import { getInitialTheme } from '~/utils/theme';

import { themes } from './themes';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(null);
  const chakraTheme = useMemo(
    () => extendTheme(mounted ? themes[theme] || themes.light : themes.light),
    [theme, mounted],
  );
  const isAmp = useAmp();

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const component = (
    <ChakraProvider resetCSS={false} theme={chakraTheme}>
      <AppProvider theme={theme} setTheme={setTheme}>
        {children}
      </AppProvider>
    </ChakraProvider>
  );

  if (isAmp) {
    return <CacheProvider value={cache}>{component}</CacheProvider>;
  }

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{component}</div>;
  }

  return component;
};
