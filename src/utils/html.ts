import { convert } from 'html-to-text';

export const htmlToText = (htmlString: string): string =>
  convert(htmlString)
    .replace(/&nbsp;/g, '')
    .replace(/\n\n/g, '\n')
    .replace(/\n\n\n/g, '\n')
    .trim();
