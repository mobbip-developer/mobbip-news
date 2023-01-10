/* eslint-disable react/no-unknown-property */
import Head from 'next/head';

export type GtmAmpProps = {
  gtmId: string;
};

export const GtmAmp = ({ gtmId }: GtmAmpProps) => (
  <>
    <Head>
      <script
        async
        custom-element="amp-analytics"
        src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
      />
    </Head>
    <amp-analytics
      config={`https://www.googletagmanager.com/amp.json?id=${gtmId}&gtm.url=SOURCE_URL`}
      data-credentials="include"
    />
  </>
);
