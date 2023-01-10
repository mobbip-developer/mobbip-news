import { ArticleSdProps } from '~/components/SEO/StructuredData/Article';
import { LocaleEnum } from '~/constants/locale.constants';
import { Content as StrapiContent } from '~/services/cms-api/types/content';

import { Author } from './author';
import { Category } from './category';
import { Image } from './image';

export type PageContentType = 'phone' | 'post';

export type PageStructuredData = ArticleSdProps;

export type PageMeta = {
  title: string;
  description: string | null;
};

export type Page = {
  id: number;
  slug: string;
  path: string;
  url?: string;
  category: Category;
  author?: Author | null;
  contentType: PageContentType;
  title: string;
  redirect: string | null;
  locale: LocaleEnum;
  content: StrapiContent[];
  featuredImage: Image | null;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  structuredData: PageStructuredData | null;
  meta: PageMeta;
};
