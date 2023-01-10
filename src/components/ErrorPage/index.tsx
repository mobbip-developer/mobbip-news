import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Link } from '~/components/Link';
import { SITE_URL } from '~/constants/environment.constants';
import { ErrorEnum } from '~/constants/error.constants';
import { useTheme } from '~/hooks/theme';
import { contentByLocale } from '~/locales';

import { Logo } from '../Logo';
import { Meta } from '../SEO/Meta';
import * as S from './styles';

type ErrorProps = {
  code: ErrorEnum[number];
};

export const ErrorPage = ({ code }: ErrorProps) => {
  const { asPath, locale } = useRouter();
  const { theme } = useTheme();

  const canonical = `${SITE_URL}${asPath}`;
  const content = contentByLocale[locale].components.ErrorPage;

  return (
    <>
      <Meta
        title={`${content.errors[code].title} - Mobbip`}
        description={content.errors[code].title}
        canonical={canonical}
      />

      <S.Wrapper>
        <Link href="/">
          <Logo theme={theme} />
        </Link>

        <S.InfoWrapper>
          <h1>{content.errors[code].title}</h1>
          <p>{content.errors[code].description}</p>

          <NextLink href="/" passHref>
            <S.ButtonGoHome>{content.goHome}</S.ButtonGoHome>
          </NextLink>
        </S.InfoWrapper>
      </S.Wrapper>
    </>
  );
};
