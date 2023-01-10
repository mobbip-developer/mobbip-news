import { ThemeConfigEnum, ThemeEnum } from '~/constants/theme.constants';

export const getInitialTheme = (): ThemeEnum => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(
      ThemeConfigEnum.localStorageKey,
    );

    if (typeof storedPrefs === 'string') {
      return storedPrefs as ThemeEnum;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return ThemeEnum.DARK;
    }
  }

  return ThemeEnum.LIGHT;
};
