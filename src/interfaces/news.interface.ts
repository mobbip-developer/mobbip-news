import { NewsArticleSdProps } from '~/components/SEO/StructuredData/NewsArticle';
import type { Author } from '~/types/cms-v2/author';
import type { Image } from '~/types/cms-v2/image';

export type NewsMeta = {
  title: string;
  description: string | null;
};

export type NewsStructuredData = NewsArticleSdProps;

export type News = {
  id: number;
  title: string;
  content: string;
  sourceUrl?: string;
  show_view_source_url?: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  featuredImage: Image | null;
  path: string;
  url: string;
  meta?: NewsMeta;
  author?: Author | null;
  structuredData: NewsStructuredData | null;
};
