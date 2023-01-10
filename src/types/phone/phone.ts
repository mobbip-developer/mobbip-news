import { PhoneCms } from '../cms/phone';
import { Brand } from './brand';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Specs = {
  [key: string]: {
    [key: string]: any;
  };
};

type MarketStatus = 'released' | 'upcoming';

export type Phone = {
  _id?: string;
  name: string;
  model: string;
  slug: string;
  path: string;
  summary: string;
  urlId?: string;
  brandId?: string;
  brandSlug: string;
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
  createdAt: string;
  updatedAt: string;
  cms?: PhoneCms;
  brand?: Brand;
};
