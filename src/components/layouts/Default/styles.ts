import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type AmpProps = {
  isAmp?: boolean;
};

export const Wrapper = styled.div<AmpProps>`
  display: flex;

  background: ${({ theme }) => theme.colors.background};

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({ isAmp = false }) =>
      isAmp
        ? css`
            padding: 0;
            margin-left: 0;
          `
        : css`
            padding: 0 4rem;

            @media (max-width: ${ScreenSizeValueEnum.XL}px) {
              padding: 0 2rem;
            }

            @media (max-width: ${ScreenSizeValueEnum.LG}px) {
              padding: 0 1rem;
            }

            @media (max-width: ${ScreenSizeValueEnum.MD}px) {
              margin-left: 0;
              padding: 0;
            }
          `}
  }
`;

export const Container = styled.div<AmpProps>`
  width: 100%;
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.container};

  ${({ isAmp = false, theme }) =>
    isAmp
      ? css`
          max-width: 600px;
        `
      : css`
          max-width: ${theme.container.maxWidth / 16}rem;

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            max-width: ${theme.container.maxWidth * 0.7}px;
          }
        `}
`;

export const ContainerWrapper = styled.div<AmpProps>`
  margin-bottom: 3rem;

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          margin: 0;
        `
      : css`
          margin-left: 4rem;

          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            margin-left: 0;
            margin-top: 4rem;
          }
        `}
`;
