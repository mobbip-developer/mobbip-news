import Head from 'next/head';

type TableProps = {
  about: string;
};

export function Table({ about }: TableProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Table',
            about,
          }),
        }}
      />
    </Head>
  );
}
