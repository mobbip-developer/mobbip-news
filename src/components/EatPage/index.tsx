import type { Eat } from '~/types/cms/eat';

import { Meta } from '../SEO/Meta';
import { StrapiRenderer } from '../StrapiRenderer';
import * as S from './styles';

type EatPageProps = {
  title: string;
  page: Eat;
  path: string;
};

export const EatPage = ({ page, title, path }: EatPageProps) => (
  <>
    <Meta
      title={`${title} - Mobbip`}
      description={`${title} - Mobbip`}
      canonical={`https://mobbip.com${path}`}
      imageUrl="/images/og.jpg"
      imageAlt="Mobbip"
    />

    <S.ContentWrapper>
      <h1>{title}</h1>
      <StrapiRenderer content={page?.content} />
    </S.ContentWrapper>
  </>
);
