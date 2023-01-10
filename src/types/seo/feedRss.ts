export type FeedRssItem = {
  title: string;
  link: string;
  guid: string;
  pubDate: string;
  description: string;
  'content:encoded': string;
};

export type FeedRss = {
  slug: string;
  title: string;
  link: string;
  description: string;
  lastBuildDate: string;
  docs: string;
  image: {
    title: string;
    url: string;
    link: string;
  };
  items: FeedRssItem[];
  updatedAt: string;
};
