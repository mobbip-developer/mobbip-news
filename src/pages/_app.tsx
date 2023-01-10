import '../styles/fonts.css';

import { ReactElement, ReactNode, useCallback } from 'react';

import type { NextPage } from 'next';

import { AppProps } from 'next/app';

import { GoogleAdsense } from '~/components/google/Adsense';
import { GoogleAnalytics } from '~/components/google/Analytics';
import { DefaultLayout } from '~/components/layouts/Default';
import { OneSignal } from '~/components/OneSignal';
import {
  ErrorEnum,
  ERROR_PATHS_STATUS_CODE,
} from '~/constants/error.constants';
import { ErrorPathsEnum } from '~/constants/paths.constants';
import { GlobalStyles } from '~/styles/global.styles';
import { ThemeProvider } from '~/styles/ThemeProvider';

import Error from './_error';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ERROR_PATHS: string[] = Object.values(ErrorPathsEnum);

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  const isErrorPage = ERROR_PATHS.includes(router.route);

  const renderComponent = useCallback(() => {
    const getLayout =
      Component.getLayout ??
      (page => (
        <DefaultLayout>
          <>{page}</>
        </DefaultLayout>
      ));

    return isErrorPage ? (
      <Error
        statusCode={
          ERROR_PATHS_STATUS_CODE[router.route as ErrorPathsEnum] ||
          ErrorEnum.InternalServerError
        }
      />
    ) : (
      getLayout(<Component {...pageProps} />)
    );
  }, [Component, isErrorPage, pageProps, router.route]);

  return (
    <>
      <GoogleAnalytics />
      <GoogleAdsense />
      <OneSignal />

      <ThemeProvider>
        <GlobalStyles />
        {renderComponent()}
      </ThemeProvider>
    </>
  );
}
