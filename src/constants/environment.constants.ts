export enum EnvironmentEnum {
  prod = 'prod',
  eat = 'eat',
  dev = 'dev',
  local = 'local',
}

export const ENVIRONMENT =
  process.env.NEXT_PUBLIC_ENVIRONMENT || EnvironmentEnum.local;

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const SITE_URL = process.env.NEXT_PUBLIC_URL;

export const SITE_URL_PROD = 'https://mobbip.com';
