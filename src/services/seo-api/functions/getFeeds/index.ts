import type { FeedRss } from '~/types/seo/feedRss';

import { seoApi } from '../../config';
import type { FeedRss as FeedRssApi } from '../../types/feedRss';
import { formatResponse as formatFeeds } from './formatResponse';

type GetFeedsProps = {
  proxy?: boolean;
};

export async function getFeeds({
  proxy = false,
}: GetFeedsProps): Promise<FeedRss[]> {
  const {
    data: { feeds },
  } = await seoApi({ proxy }).get<{ feeds: FeedRssApi[] }>('/feeds');

  const formattedFeeds = formatFeeds(feeds);

  return formattedFeeds;
}
