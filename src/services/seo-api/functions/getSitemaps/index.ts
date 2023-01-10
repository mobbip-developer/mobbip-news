import type { Sitemap } from '~/types/seo/sitemap';

import { seoApi } from '../../config';
import type { Sitemap as SitemapApi } from '../../types/sitemap';
import { formatResponse as formatSitemaps } from '../getSitemapBySlug/formatResponse';

type GetSitemapsProps = {
  proxy?: boolean;
};

export async function getSitemaps({
  proxy = false,
}: GetSitemapsProps): Promise<Sitemap[]> {
  const {
    data: { sitemaps },
  } = await seoApi({ proxy }).get<{ sitemaps: SitemapApi[] }>('/sitemaps');

  const formattedSitemaps = formatSitemaps(sitemaps);

  return formattedSitemaps;
}
