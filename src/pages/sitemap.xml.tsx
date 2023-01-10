/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';

import { EXTERNAL_SITEMAPS } from '~/constants/sitemap.constants';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { getSitemaps } = await import(
    '~/services/seo-api/functions/getSitemaps'
  );
  const sitemaps = await getSitemaps({});

  const fields = sitemaps
    .filter(sitemap => sitemap.slug.includes('news-'))
    .map(
      (sitemap: any) =>
        `<sitemap><loc>${process.env.NEXT_PUBLIC_URL}/sitemaps/${sitemap.slug}.xml</loc></sitemap>`,
    )
    .join('');

  const externalFields = EXTERNAL_SITEMAPS.map(
    sitemapUrl => `<sitemap><loc>${sitemapUrl}</loc></sitemap>`,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${fields}
  ${externalFields}
  </sitemapindex>`;

  ctx.res.setHeader('Content-Type', 'text/xml');
  ctx.res.write(xml);
  ctx.res.end();

  return { props: {} };
};

export default function Sitemap() {
  //
}
