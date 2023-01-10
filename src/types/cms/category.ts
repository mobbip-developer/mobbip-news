import { LocaleEnum } from '~/constants/locale.constants';
import { Content as StrapiContent } from '~/services/cms-api/types/content';

export type CategoryContentType = 'normal' | 'brand';

export type Category = {
  id?: number;
  name: string;
  contentType: CategoryContentType;
  slug: string;
  path: string;
  url?: string;
  locale?: LocaleEnum;
  content?: StrapiContent[];
};
