import type { FeedRss } from '~/types/seo/feedRss';

import { seoApi } from '../../config';
import type { FeedRss as FeedRssApi } from '../../types/feedRss';
import { formatResponse as formatFeeds } from '../getFeeds/formatResponse';

type GetFeedBySlug = {
  slug: string;
  select?: (keyof FeedRssApi)[];
  proxy?: boolean;
};

export const getFeedBySlug = async ({
  slug,
  select,
  proxy = false,
}: GetFeedBySlug): Promise<FeedRss | null> => {
  const {
    data: { feed },
  } = await seoApi({ proxy }).get<{ feed: FeedRssApi }>(`/feeds/${slug}`, {
    params: {
      ...(select && select.length > 0 ? { select: select.join(',') } : {}),
    },
  });

  if (!feed) {
    return null;
  }

  const [formattedFeed] = formatFeeds([feed]);

  return formattedFeed;
};
