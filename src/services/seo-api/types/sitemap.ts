export type SitemapUrl = {
  loc: string;
  lastmod: string;
  'image:image'?: string;
  'video:video'?: string;
};

export type Sitemap = {
  slug: string;
  urls: SitemapUrl[];
  createdAt?: string;
  updatedAt?: string;
};
