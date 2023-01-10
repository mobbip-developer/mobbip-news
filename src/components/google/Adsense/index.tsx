import { useAmp } from 'next/amp';

import { ENVIRONMENT } from '~/constants/environment.constants';
import { GoogleEnum } from '~/constants/google.constants';

import { AdsenseAmp } from './Amp';
import { AdsenseNonAmp } from './NonAmp';

type GoogleAdsenseProps = {
  enabled?: boolean;
};

export const GoogleAdsense = ({
  enabled = ENVIRONMENT === 'prod',
}: GoogleAdsenseProps) => {
  const isAmp = useAmp();

  if (!enabled) {
    return <></>;
  }

  return isAmp ? (
    <AdsenseAmp adsenseId={GoogleEnum.AdsenseId} />
  ) : (
    <AdsenseNonAmp adsenseId={GoogleEnum.AdsenseId} />
  );
};
