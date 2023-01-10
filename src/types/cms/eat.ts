import { LocaleEnum } from '~/constants/locale.constants';
import { Content as StrapiContent } from '~/services/cms-api/types/content';

export type Eat = {
  id: number;
  locale: LocaleEnum;
  content: StrapiContent[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};
