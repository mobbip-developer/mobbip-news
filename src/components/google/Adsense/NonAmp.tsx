import Head from 'next/head';

type AdsenseNonAmpProps = {
  adsenseId: string;
};

export const AdsenseNonAmp = ({ adsenseId }: AdsenseNonAmpProps) => (
  <Head>
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
    />
  </Head>
);
