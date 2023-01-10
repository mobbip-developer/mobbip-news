import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type AmpProps = {
  isAmp?: boolean;
};

export const Wrapper = styled.div<AmpProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 1.5rem 0;

  > div {
    ${({ isAmp = false }) =>
      isAmp
        ? css`
            max-width: 100%;
          `
        : css`
            max-width: 20%;

            @media (max-width: ${ScreenSizeValueEnum.XL}px) {
              max-width: 25%;
            }

            @media (max-width: ${ScreenSizeValueEnum.LG}px) {
              max-width: 33.33%;
            }

            @media (max-width: ${ScreenSizeValueEnum.MD}px) {
              max-width: 50%;
            }

            @media (max-width: ${ScreenSizeValueEnum.SM}px) {
              max-width: 100%;
            }
          `}
  }
`;
