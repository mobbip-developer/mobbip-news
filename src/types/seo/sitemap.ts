export type SitemapUrl = {
  loc: string;
  title: string;
  path: string;
  lastmod: string;
  'image:image'?: string;
  'video:video'?: string;
};

export type Sitemap = {
  slug: string;
  title: string;
  urls: SitemapUrl[];
  createdAt?: string;
  updatedAt?: string;
};
