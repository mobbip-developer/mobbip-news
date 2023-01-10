import type { ArticleSdProps } from '~/components/SEO/StructuredData/Article';
import { LocaleEnum } from '~/constants/locale.constants';
import type { Content as StrapiContent } from '~/services/cms-api/types/content';

import type { Author } from './author';
import type { Category } from './category';
import type { Image } from './image';

export type PostStructuredData = ArticleSdProps;

export type PostMeta = {
  title: string;
  description: string | null;
};

export type Post = {
  id: number;
  slug: string;
  path: string;
  url?: string;
  category: Category;
  author?: Author | null;
  title: string;
  locale: LocaleEnum;
  content: StrapiContent[];
  featuredImage: Image | null;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  structuredData: PostStructuredData | null;
  meta: PostMeta;
};
