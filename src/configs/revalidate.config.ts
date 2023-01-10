import {
  EnvironmentEnum,
  ENVIRONMENT,
} from '~/constants/environment.constants';

const ONE_HOUR_IN_SECONDS = 3600;

type RevalidatePages = {
  home: number;
  eat: number;
  page: {
    post: number;
    phone: number;
  };
  category: {
    normal: number;
    brand: number;
  };
  authors: {
    index: number;
    '[author]': number;
  };
  products: {
    '[company]': number;
    '[company]/[product]': number;
  };
  news: {
    index: number;
    '[news]': number;
  };
};

const verifyEnv = (seconds: number): number =>
  ENVIRONMENT !== EnvironmentEnum.prod ? 5 : seconds;

const oneHour = ONE_HOUR_IN_SECONDS;
const sixHours = ONE_HOUR_IN_SECONDS * 6;
const twentyFourHours = ONE_HOUR_IN_SECONDS * 24;
const oneWeek = ONE_HOUR_IN_SECONDS * 168;

export const revalidate: RevalidatePages = {
  home: verifyEnv(oneHour / 2),
  eat: verifyEnv(oneWeek),
  page: {
    post: verifyEnv(twentyFourHours),
    phone: verifyEnv(oneWeek),
  },
  category: {
    normal: verifyEnv(sixHours),
    brand: verifyEnv(sixHours),
  },
  authors: {
    index: verifyEnv(twentyFourHours),
    '[author]': verifyEnv(twentyFourHours),
  },
  products: {
    '[company]': verifyEnv(oneWeek),
    '[company]/[product]': verifyEnv(oneWeek),
  },
  news: {
    index: verifyEnv(oneHour / 2),
    '[news]': verifyEnv(oneWeek),
  },
};
