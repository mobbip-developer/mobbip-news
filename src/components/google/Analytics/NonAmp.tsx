import Script from 'next/script';

type GoogleAnalyticsNonAmpProps = {
  trackingId: string;
};

export const GoogleAnalyticsNonAmp = ({
  trackingId,
}: GoogleAnalyticsNonAmpProps) => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${trackingId});
        `}
    </Script>
  </>
);
