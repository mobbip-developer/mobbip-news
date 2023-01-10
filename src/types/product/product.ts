import { Company } from './company';
import { Rating } from './rating';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Specs = {
  [key: string]: {
    [key: string]: any;
  };
};

type MarketStatus = 'released' | 'upcoming';

export type Product = {
  _id?: string;
  slug: string;
  name: string;
  path: string;
  mainSpecs: {
    [key: string]: string;
  };
  specs: Specs;
  marketStatus: MarketStatus;
  externalInfo?: {
    imageUrl?: string | null;
  };
  imageUrl: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
  } | null;
  description?: string | null;
  review?: string | null;
  image?: string;
  cmsStatus: {
    [key: string]: string;
  };
  sourceId: string;
  companyId: string;
  companySlug: string;
  company: Company;
  views: number;
  type: string;
  releasedAt: string;
  rating?: Rating;
  createdAt: string;
  updatedAt: string;
};
