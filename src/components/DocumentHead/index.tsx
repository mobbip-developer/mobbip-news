type DocumentHeadProps = {
  siteIndexable?: boolean;
};

export const DocumentHead = ({ siteIndexable = true }: DocumentHeadProps) => (
  <>
    <link rel="icon" href="/favicon.ico" />

    <meta
      name="robots"
      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />

    {!siteIndexable && (
      <>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </>
    )}
  </>
);
