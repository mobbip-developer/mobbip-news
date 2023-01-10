import '@emotion/react';

import { Theme as DefaultTheme } from '~/constants/theme.constants';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
