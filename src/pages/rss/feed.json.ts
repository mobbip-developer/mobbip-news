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

  console.log('feed', feed.items.length);

  const feedRss = generateFeedRss({ feed });
  const json1 = feedRss.json1();

  ctx.res.setHeader('Content-Type', 'application/json');
  ctx.res.write(json1);
  ctx.res.end();

  return { props: {} };
};

export default function Feed() {
  //
}
