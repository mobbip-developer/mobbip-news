import Head from 'next/head';

import { SITE_URL } from '~/constants/environment.constants';

type OrganizationProps = {
  name?: string;
  url?: string;
  logo?: string;
};

export function Organization({
  name = 'Mobbip',
  url = SITE_URL,
  logo = `${SITE_URL}/images/logo-text.png`,
}: OrganizationProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name,
            url,
            logo,
          }),
        }}
      />
    </Head>
  );
}
