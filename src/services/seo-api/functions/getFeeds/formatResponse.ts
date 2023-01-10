import type { FeedRss } from '~/types/seo/feedRss';

import type { FeedRss as FeedRssApi } from '../../types/feedRss';

export const formatResponse = (feeds: FeedRssApi[]): FeedRss[] => {
  const formattedFeeds: FeedRss[] = feeds.map(feed => ({
    ...feed,
  }));

  formattedFeeds.sort((a, b) => (a.title > b.title ? 1 : -1));

  return formattedFeeds;
};
