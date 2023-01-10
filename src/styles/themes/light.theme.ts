import { Theme } from '~/constants/theme.constants';

import { defaultTheme } from './default.theme';

export const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
};
