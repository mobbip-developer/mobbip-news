import { SITE_URL_PROD } from '~/constants/environment.constants';
import type { SitemapUrl } from '~/types/seo/sitemap';
import { capitalize } from '~/utils/text';

import { SitemapUrl as SitemapUrlApi } from '../types/sitemap';

const getTitleFromLoc = (loc: string) => {
  const splitLoc = loc.split('/');
  const lastPath = splitLoc[splitLoc.length - 1];
  return capitalize(lastPath.split('-').join(' '));
};

export const formatSitemapUrls = (
  sitemapUrls: SitemapUrlApi[] = [],
): SitemapUrl[] => {
  const formattedSitemapUrls: SitemapUrl[] = sitemapUrls.map(url => ({
    ...url,
    title: getTitleFromLoc(url.loc),
    path: url.loc.replace(SITE_URL_PROD, ''),
  }));

  return formattedSitemapUrls;
};
