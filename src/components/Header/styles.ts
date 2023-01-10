import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type AmpProps = {
  isAmp?: boolean;
};

export const Header = styled.header<AmpProps>`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: transparent;
  height: auto;
  padding: 1rem;

  a {
    text-decoration: none;
  }

  ${({ isAmp = false, theme }) =>
    isAmp
      ? css``
      : css`
          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            position: fixed;

            height: 3.5rem;

            background: ${theme.colors.gray[800]};
          }
        `}
`;

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  right: 0;

  margin-right: 2rem;
`;
