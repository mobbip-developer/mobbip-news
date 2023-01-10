/* eslint-disable react/no-unknown-property */
import Head from 'next/head';

type GoogleAnalyticsAmpProps = {
  trackingId: string;
};

export const GoogleAnalyticsAmp = ({ trackingId }: GoogleAnalyticsAmpProps) => (
  <>
    <Head>
      <script
        async
        custom-element="amp-analytics"
        src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
      />
    </Head>

    <amp-analytics type="gtag" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            vars: {
              gtag_id: trackingId,
              config: {
                trackingId: { groups: 'default' },
              },
            },
          }),
        }}
      />
    </amp-analytics>
  </>
);
