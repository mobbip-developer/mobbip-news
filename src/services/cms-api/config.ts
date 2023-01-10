import axios from 'axios';

import { axiosInterceptor } from '~/services/proxy/auth/axiosInterceptor';

const strapiApiOriginal = axios.create({
  baseURL: process.env.CMS_API_URL,
  headers: {
    authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
  },
});

const strapiApiProxy = axiosInterceptor(
  axios.create({
    baseURL: '/api/cms-api',
  }),
);

export const strapiApi = (props: { proxy?: boolean } | void) =>
  props && props?.proxy ? strapiApiProxy : strapiApiOriginal;
