import type { Sitemap } from '~/types/seo/sitemap';

import { seoApi } from '../../config';
import type { Sitemap as SitemapApi } from '../../types/sitemap';
import { formatResponse } from './formatResponse';

type GetSitemapBySlug = {
  slug: string;
  select?: (keyof SitemapApi)[];
  proxy?: boolean;
};

export const getSitemapBySlug = async ({
  slug,
  select,
  proxy = false,
}: GetSitemapBySlug): Promise<Sitemap | null> => {
  const {
    data: { sitemap },
  } = await seoApi({ proxy }).get<{ sitemap: SitemapApi }>(
    `/sitemaps/${slug}`,
    {
      params: {
        ...(select && select.length > 0 ? { select: select.join(',') } : {}),
      },
    },
  );

  if (!sitemap) {
    return null;
  }

  const [formattedSitemap] = formatResponse([sitemap]);

  return formattedSitemap;
};
