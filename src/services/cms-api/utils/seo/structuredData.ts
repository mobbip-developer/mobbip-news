import { NewsArticleSdProps } from '~/components/SEO/StructuredData/NewsArticle';
import { SITE_URL } from '~/constants/environment.constants';
import { News } from '~/interfaces/news.interface';

import type { News as StrapiNews } from '../../types';

function sanitizeSimpleObject<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => (!value && value !== 0 ? null : value)),
  );
}

export const newsStructuredData = (
  news: News,
  { attributes: strapiNews }: StrapiNews,
) => {
  const newsArticleSd: NewsArticleSdProps = {
    headline: news?.meta?.title || news?.title,
    image: news?.featuredImage?.original?.url,
    url: news?.url,
    datePublished: strapiNews?.publishedAt,
    dateCreated: strapiNews?.createdAt,
    dateModified: strapiNews?.updatedAt,
    description: news?.meta?.description,

    ...(news?.author?.slug
      ? {
          author: {
            '@type': 'Person',
            name: news?.author?.name || 'Equipe DisruptiveVerse',
            url: news.author.slug
              ? `${SITE_URL}/blog/authors/${news.author.slug}`
              : null,
          },
        }
      : {}),
  };

  return sanitizeSimpleObject<NewsArticleSdProps>(newsArticleSd);
};
