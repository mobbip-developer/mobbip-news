/* eslint-disable react/no-unknown-property */
import Head from 'next/head';

type AdsenseAmpProps = {
  adsenseId: string;
};

export const AdsenseAmp = ({ adsenseId }: AdsenseAmpProps) => (
  <>
    <Head>
      <script
        async
        custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
      />
    </Head>
    <amp-auto-ads type="adsense" data-ad-client={adsenseId}></amp-auto-ads>
  </>
);
