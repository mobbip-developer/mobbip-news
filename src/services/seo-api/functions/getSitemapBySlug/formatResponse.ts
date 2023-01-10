import type { Sitemap } from '~/types/seo/sitemap';
import { capitalize } from '~/utils/text';

import type { Sitemap as SitemapApi } from '../../types/sitemap';
import { formatSitemapUrls } from '../../utils/formatSitemapUrls';

const replaceWithPtBr = (title: string) =>
  title
    .replace(/category/g, 'categorias')
    .replace(/brand/g, 'marcas')
    .replace(/phone/g, 'smartphones');

export const formatResponse = (sitemaps: SitemapApi[]): Sitemap[] => {
  const formattedSitemaps: Sitemap[] = sitemaps.map(sitemap => ({
    ...sitemap,
    title: capitalize(replaceWithPtBr(sitemap.slug.split('-').join(' '))),
    urls: formatSitemapUrls(sitemap.urls),
  }));

  formattedSitemaps.sort((a, b) => (a.title > b.title ? 1 : -1));

  return formattedSitemaps;
};
