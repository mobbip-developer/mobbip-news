import Head from 'next/head';

import { SITE_URL } from '~/constants/environment.constants';

export type ArticleSdProps = {
  headline?: string;
  alternativeHeadline?: string;
  image?: string;
  author?: string;
  genre?: string;
  keywords?: string[];
  wordcount?: number;
  url?: string;
  datePublished?: string;
  dateCreated?: string;
  dateModified?: string;
  description?: string;
  articleBody?: string;
};

export const Article = (props: ArticleSdProps) => (
  <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Mobbip',
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/images/logo-text.png`,
            },
          },
          ...props,
        }),
      }}
    />
  </Head>
);
