import { AxiosInstance } from 'axios';

import { generateToken } from './generateToken';

export const axiosInterceptor = (api: AxiosInstance): AxiosInstance => {
  api.interceptors.request.use(config => ({
    ...config,
    headers: {
      ...config?.headers,
      authorization: generateToken(),
    },
  }));

  return api;
};
