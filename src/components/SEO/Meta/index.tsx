import Head from 'next/head';

import { renderSpeakableSpecification } from '../StructuredData/SpeakableSpecification';

type MetaProps = {
  siteName?: string;
  title: string;
  description: string;
  canonical: string;
  amphtml?: string;
  ogType?: 'website' | 'article';
  locale?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const Meta = ({
  siteName = 'Mobbip',
  title,
  description,
  canonical,
  amphtml,
  ogType,
  locale,
  imageUrl = '/images/og.jpg',
  imageAlt = 'Mobbip',
}: MetaProps) => (
  <Head>
    <title>{title}</title>

    <meta name="description" content={description} />
    <meta property="image" content={imageUrl} />

    <meta property="og:site_name" content={siteName} />
    <meta property="og:locale" content={locale} />
    {ogType && <meta property="og:type" content={ogType} />}
    <meta property="og:url" content="" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={imageAlt} />
    {/* <meta property="og:image:type" content="image/png" /> */}
    {/* <meta property="og:image:width" content="1200" /> */}
    {/* <meta property="og:image:height" content="675" /> */}

    <link rel="canonical" href={canonical} />
    {amphtml && <link rel="amphtml" href={amphtml} />}

    {canonical &&
      title &&
      renderSpeakableSpecification({ name: title, url: canonical })}
  </Head>
);
