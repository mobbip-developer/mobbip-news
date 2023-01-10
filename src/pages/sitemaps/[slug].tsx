/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { GetServerSideProps } from 'next';

import { SitemapUrl } from '~/types/seo/sitemap';

const FIELDS_NOT_ALLOWED: (keyof (SitemapUrl & { _id: string }))[] = [
  '_id',
  'title',
  'path',
];

const generateFields = (object: any): string => {
  FIELDS_NOT_ALLOWED.forEach(field => delete object[field]);

  const keys = Object.keys(object);

  const fields = keys
    .map(key =>
      Array.isArray(object[key])
        ? object[key]
            .map((item: any) => `<${key}>${generateFields(item)}</${key}>`)
            .join('')
        : `<${key}>${object[key]
            .replace(/&/g, '&amp;')
            .replace('pt-BR', 'pt-br')}</${key}>`,
    )
    .join('');

  return fields;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { getSitemapBySlug } = await import(
    '~/services/seo-api/functions/getSitemapBySlug'
  );
  const { slug = '' } = ctx.query;

  const sitemap = await getSitemapBySlug({
    slug: String(slug).replace('.xml', ''),
  });

  if (!sitemap) {
    return { notFound: true };
  }

  const fields = sitemap.urls
    .map((url: any) => `<url>${generateFields(url)}</url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${fields}
  </urlset>`;

  ctx.res.setHeader('Content-Type', 'text/xml');
  ctx.res.write(xml);
  ctx.res.end();

  return { props: {} };
};

export default function Sitemap() {
  //
}
