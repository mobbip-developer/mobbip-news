import { Feed as FeedRss } from 'feed';

import { FeedRss as FeedRssType } from '~/types/seo/feedRss';

type GenerateFeedRssParams = {
  feed: FeedRssType;
};

export const generateFeedRss = ({ feed }: GenerateFeedRssParams): FeedRss => {
  const feedLink = `https://mobbip.com/rss/${feed.slug}`;

  const feedRss = new FeedRss({
    title: feed?.title,
    description: feed?.description,
    id: feed?.slug as string,
    link: feed?.link,
    language: 'pt-BR', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'https://mobbip.com/images/mobbip.png',
    favicon: 'https://mobbip.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Mobbip`,
    updated: new Date(feed.updatedAt),
    docs: 'https://validator.w3.org/feed/docs/rss2.html',
    feedLinks: {
      json1: `${feedLink}.json`,
      atom1: `${feedLink}-atom1.xml`,
      rss2: `${feedLink}.xml`,
    },
  });

  feed.items.forEach(item => {
    if (item.link.includes('/news/')) {
      feedRss.addItem({
        title: item.title,
        link: item.link
          .replace('/news/', '/')
          .replace('mobbip.com', 'news.mobbip.com'),
        guid: item.guid
          .replace('/news/', '/')
          .replace('mobbip.com', 'news.mobbip.com'),
        date: new Date(item.pubDate),
        published: new Date(item.pubDate),
        description: item.description,
        content: item['content:encoded'],
        id: item.link,
      });
    }
  });

  return feedRss;
};
