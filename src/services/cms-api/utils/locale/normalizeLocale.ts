type Locales = 'default' | 'pt-br' | 'pt-BR' | 'PT-BR';

export function normalizeLocale(locale: string | string[]): string | null {
  const locales: { [key in Locales]: 'pt-BR' } = {
    default: 'pt-BR',
    'pt-br': 'pt-BR',
    'pt-BR': 'pt-BR',
    'PT-BR': 'pt-BR',
  };

  if (!Object.keys(locales).includes(String(locale))) {
    return null;
  }

  return locales[locale as Locales[number]];
}
