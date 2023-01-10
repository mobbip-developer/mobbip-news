type AmazonAds = {
  id: string | number;
  link: string;
};

export type PhoneCms = {
  summary: string;
  amazonAdsGroup: AmazonAds[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};
