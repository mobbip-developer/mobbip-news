import { useAmp } from 'next/amp';

import { GoogleEnum } from '~/constants/google.constants';

import { GoogleAnalyticsAmp } from './Amp';
import { GoogleAnalyticsNonAmp } from './NonAmp';

export const GoogleAnalytics = () => {
  const isAmp = useAmp();

  return isAmp ? (
    <GoogleAnalyticsAmp trackingId={GoogleEnum.Ga4TrackingId} />
  ) : (
    <GoogleAnalyticsNonAmp trackingId={GoogleEnum.Ga4TrackingId} />
  );
};
