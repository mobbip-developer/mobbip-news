import { Author } from './author';
import type { Image } from './image';

export type NewMeta = {
  title: string;
  description: string | null;
};

export type New = {
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
  meta?: NewMeta;
  author?: Author | null;
};
