import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type AmpProps = {
  isAmp?: boolean;
};

type ThemeProps = {
  isDark?: boolean;
};

const spacings = (isAmp = false) =>
  isAmp
    ? css`
        padding: 1rem;
      `
    : css`
        @media (max-width: ${ScreenSizeValueEnum.LG}px) {
          padding: 1rem 4rem;
        }

        @media (max-width: ${ScreenSizeValueEnum.MD}px) {
          padding: 1rem 2rem;
        }

        @media (max-width: ${ScreenSizeValueEnum.SM}px) {
          padding: 1rem;
        }
      `;

export const Wrapper = styled.footer<AmpProps & ThemeProps>`
  display: flex;
  flex-direction: column;

  border-top: solid 1px
    ${({ theme, isDark }) => theme.colors.gray[isDark ? 950 : 50]};

  color: ${({ theme }) => theme.colors.text};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ContentWrapper = styled.div<AmpProps & ThemeProps>`
  padding: 2rem 6rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font-size: 1.125rem;
  }

  p {
    font-size: 1rem;
  }

  > div:nth-of-type(1) {
    max-width: 200px;
    width: 100%;
  }

  > div:nth-of-type(2) {
    flex: 1;

    p {
      margin-top: 1rem;
    }
  }

  > div:nth-of-type(3) {
    flex: 0.75;

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      width: 100%;
      margin-top: 1rem;

      a {
        padding: 0.5rem;
        border-radius: 0.5rem;

        background: ${({ theme, isDark }) =>
          theme.colors.gray[isDark ? 950 : 50]};
        color: ${({ theme }) => theme.colors.text};

        :hover {
          color: ${({ theme }) => theme.colors.link};
        }
      }
    }
  }

  ${({ isAmp, isDark, theme }) => css`
    ${spacings(isAmp)}

    ${isAmp
      ? css`
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 2rem;
        `
      : css`
          div + div {
            border-left: solid 1px ${theme.colors.gray[isDark ? 950 : 50]};
            padding-left: 1rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            flex-direction: column;
            gap: 2rem;
            padding-bottom: 2rem;

            div + div {
              border-left: none;
              padding: 0;
            }
          }
        `}
  `}
`;

export const BottomWrapper = styled.div<AmpProps & ThemeProps>`
  padding: 1rem 6rem;

  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  background: ${({ theme, isDark }) => theme.colors.gray[isDark ? 950 : 50]};
  color: ${({ theme }) => theme.colors.text};

  ${({ isAmp }) => spacings(isAmp)}
`;
