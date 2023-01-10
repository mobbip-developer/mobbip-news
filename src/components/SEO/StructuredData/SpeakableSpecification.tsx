type SpeakableSpecificationProps = {
  name: string;
  url: string;
};

export const renderSpeakableSpecification = ({
  name,
  url,
}: SpeakableSpecificationProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebPage',
        name,
        url,
        speakable: {
          '@type': 'SpeakableSpecification',
          xPath: [
            '/html/head/title',
            "/html/head/meta[@name='description']/@content",
          ],
        },
      }),
    }}
  />
);
