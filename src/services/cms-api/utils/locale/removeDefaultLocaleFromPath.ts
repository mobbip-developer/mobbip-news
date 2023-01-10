/* eslint-disable no-restricted-syntax */
import { DEFAULT_LOCALES } from '~/constants/locale.constants';

export const removeDefaultLocaleFromPath = (path: string) => {
  let pathWithoutDefaultLocale = path;

  for (const defaultLocale of DEFAULT_LOCALES) {
    if (path.startsWith(`/${defaultLocale}`)) {
      pathWithoutDefaultLocale = path.replace(`/${defaultLocale}`, '');
      break;
    }
  }

  return pathWithoutDefaultLocale;
};
