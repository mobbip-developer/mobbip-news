import { stringify } from 'qs';

import type { News } from '~/interfaces/news.interface';

import { strapiApi } from '../../config';
import type { Pagination } from '../../types';
import type { News as StrapiNews } from '../../types/api/news';
import { formatResponse } from './formatResponse';

type Populate = {
  meta?: boolean;
  featured_image?: boolean;
  author?: boolean;
};

type ApiReturn = {
  data: StrapiNews[];
  meta: {
    pagination: Pagination;
  };
};

type GetNewsReturn = {
  news: News[];
  pagination: Pagination;
};

type GetNewsProps = {
  slug?: string | string[];
  populate?: Populate;
  preview?: boolean;
  sort?: ('publishedAt:desc' | 'publishedAt:asc')[];
  page?: number;
  pageSize?: number;
  proxy?: boolean;
};

export async function getNews({
  sort = ['publishedAt:desc'],
  pageSize = 10,
  proxy = false,
  page = 1,
  populate,
  preview,
  slug,
}: GetNewsProps): Promise<GetNewsReturn> {
  const query = stringify({
    filters: {
      ...(slug ? { slug: { $eq: slug } } : {}),
    },
    sort,
    'populate[category][populate]': 'attributes',
    publicationState: preview ? 'preview' : 'live',
    ...(populate?.meta ? { 'populate[meta][populate]': '*' } : {}),
    ...(populate?.featured_image ? { populate: 'featured_image' } : {}),
    ...(populate?.author ? { 'populate[author][populate]': '*' } : {}),
    pagination: {
      pageSize,
      page,
    },
  });

  const {
    data: { data: news, meta },
  } = await strapiApi({ proxy }).get<ApiReturn>(`/news/?${query}`);

  const formattedNews = formatResponse({ news });

  return {
    news: formattedNews,
    pagination: meta.pagination,
  };
}
