import type { SitemapUrl } from '~/types/seo/sitemap';

import { seoApi } from '../../config';
import type { SitemapUrl as SitemapUrlApi } from '../../types/sitemap';
import { formatSitemapUrls } from '../../utils/formatSitemapUrls';

type GetUrlsBySitemapSlugProps = {
  sitemapSlug: string;
  page?: number;
  perPage?: number;
  select?: (keyof SitemapUrlApi)[];
  proxy?: boolean;
};

type GetUrlsBySitemapSlugReturn = {
  urls: SitemapUrl[];
  total: number;
  pages: number;
  page: number;
  perPage: number;
};

type ApiReturn = {
  urls: SitemapUrlApi[];
  total: number;
  pages: number;
  page: number;
  perPage: number;
};

export const getUrlsBySitemapSlug = async ({
  sitemapSlug,
  page = 1,
  perPage = 25,
  select = ['loc'],
  proxy = false,
}: GetUrlsBySitemapSlugProps): Promise<GetUrlsBySitemapSlugReturn> => {
  const {
    data: { urls, pages, total },
  } = await seoApi({ proxy }).get<ApiReturn>(`/sitemaps/${sitemapSlug}/urls`, {
    params: {
      page,
      perPage,
      ...(select && select.length > 0 ? { select: select.join(',') } : {}),
    },
  });

  const formattedUrls = formatSitemapUrls(urls);

  return {
    urls: formattedUrls,
    pages,
    total,
    page,
    perPage,
  };
};
