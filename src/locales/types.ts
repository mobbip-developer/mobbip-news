import { ErrorEnum } from '~/constants/error.constants';

export type Locale = {
  pages: {
    home: {
      phones: string;
      news: string;
      lastPosts: string;
      meta: {
        title: string;
        description: string;
      };
    };
  };
  components: {
    Menu: {
      items: {
        news: string;
        webStories: string;
        contact: string;
        about: string;
        rssFeed: string;
      };
    };
    ErrorPage: {
      errors: {
        [key in ErrorEnum[number]]: {
          title: string;
          description: string;
        };
      };
      goHome: string;
    };
    PhoneCard: {
      seeTechnicalSheet: string;
    };
    Footer: {
      featuredTopics: string;
      about: string;
      aboutText: string;
      eat: {
        aboutUs: string;
        privacyPolicy: string;
        cookiePolicy: string;
        contact: string;
        webStories: string;
        sitemap: string;
      };
      topics: {
        companies: string;
        products: string;
        games: string;
        tutorials: string;
        recommendations: string;
        samsung: string;
        apple: string;
        motorola: string;
        news: string;
        xiaomi: string;
      };
    };
  };
};

export type ContentByLocale = {
  'pt-br': Locale;
};
