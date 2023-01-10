import React from 'react';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import { ThemeEnum } from '~/constants/theme.constants';
import { useTheme } from '~/hooks/theme';

import * as S from './styles';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Button
      onClick={toggleTheme}
      siteTheme={theme}
      aria-label="Trocar o tema do site"
    >
      {theme === ThemeEnum.DARK ? <SunIcon /> : <MoonIcon />}
    </S.Button>
  );
};
