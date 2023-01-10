import { useEffect } from 'react';

import Head from 'next/head';

import { APP_ID } from '~/constants/onesignal.constants';

declare global {
  interface Window {
    OneSignal: any;
  }
}

export const OneSignal = () => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];

    window.OneSignal?.push(() => {
      window.OneSignal?.init({
        appId: APP_ID,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <Head>
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
    </Head>
  );
};
