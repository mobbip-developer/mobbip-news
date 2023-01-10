import { useAmp } from 'next/amp';
import dynamic from 'next/dynamic';

import { ENVIRONMENT } from '~/constants/environment.constants';
import { GoogleEnum } from '~/constants/google.constants';

import type { GtmAmpProps } from './Amp';
import type { GtmNonAmpProps } from './NonAmp';

const GtmNonAmp = dynamic<GtmNonAmpProps>(
  () => import('./NonAmp').then(mod => mod.GtmNonAmp),
  { ssr: false },
);

const GtmAmp = dynamic<GtmAmpProps>(
  () => import('./Amp').then(mod => mod.GtmAmp),
  { ssr: false },
);

export const GoogleTagManager = () => {
  const isAmp = useAmp();

  if (ENVIRONMENT !== 'prod') {
    return <></>;
  }

  return isAmp ? (
    <GtmAmp gtmId={GoogleEnum.GtmAmpId} />
  ) : (
    <GtmNonAmp gtmId={GoogleEnum.GtmId} />
  );
};
