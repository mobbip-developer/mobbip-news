import { Theme } from '~/constants/theme.constants';

import { defaultTheme } from './default.theme';

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: '#1C1F24',
    container: '#252A30',
    text: '#E6E6E6',
    tableEvenBackground: '#f3f3f310',
    tableEvenColor: '#E6E6E6',
    link: '#ED7C25',
  },
};
