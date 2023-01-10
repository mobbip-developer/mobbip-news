import { GetServerSideProps } from 'next';

import { generateFeedRss } from '~/utils/seo';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { getFeedBySlug } = await import(
    '~/services/seo-api/functions/getFeedBySlug'
  );

  const feed = await getFeedBySlug({
    slug: 'feed',
  });

  if (!feed) {
    return {
      notFound: true,
    };
  }

  const feedRss = generateFeedRss({ feed });

  const rss2 = feedRss.rss2();

  ctx.res.setHeader('Content-Type', 'application/xml');
  ctx.res.write(rss2);
  ctx.res.end();

  return { props: {} };
};

export default function Feed() {
  //
}
