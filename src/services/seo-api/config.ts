import axios from 'axios';

import { axiosInterceptor } from '~/services/proxy/auth/axiosInterceptor';

const seoApiOriginal = axios.create({
  baseURL: process.env.SEO_RESOURCE_API_URL,
  headers: {
    authorization: `Bearer ${process.env.SEO_RESOURCE_API_KEY}`,
  },
});

const seoApiProxy = axiosInterceptor(
  axios.create({
    baseURL: '/api/seo-api',
  }),
);

export const seoApi = (props: { proxy?: boolean } | void) =>
  props && props?.proxy ? seoApiProxy : seoApiOriginal;
