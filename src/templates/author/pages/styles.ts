import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type AmpProps = {
  isAmp?: boolean;
};

type ThemeProps = {
  isDark?: boolean;
};

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 20rem;

  background: #f8f8f8;
`;

export const HeaderContent = styled.div<AmpProps>`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    color: ${({ theme }) => theme.colors.gray[100]};

    > div {
      display: flex;
      gap: 1rem;

      padding-top: 0.5rem;
    }

    span {
      a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    h1 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          padding: 1rem;
        `
      : css`
          padding: 2rem 3rem;

          @media (max-width: ${ScreenSizeValueEnum.SM}px) {
            padding: 1rem;
          }
        `}
`;

export const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;

  img,
  amp-img {
    object-fit: cover;
  }
`;

export const PostListSectionWrapper = styled.section<ThemeProps & AmpProps>`
  background: ${({ theme, isDark }) => theme.colors.gray[isDark ? 950 : 50]};

  h2 {
    margin-bottom: 1rem;

    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.015em;
    font-weight: 600;
  }

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          padding: 1rem;
        `
      : css`
          padding: 2rem 6rem;

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            padding: 1rem 4rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            padding: 1rem 2rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.SM}px) {
            padding: 1rem;
          }
        `}
`;

export const AuthorsSectionWrapper = styled.section<ThemeProps & AmpProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 3rem;

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          padding: 1rem;
        `
      : css`
          padding: 2rem 6rem;

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            padding: 1rem 4rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            padding: 1rem 2rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.SM}px) {
            padding: 1rem;
          }
        `}
`;

export const AboutSection = styled.section<ThemeProps & AmpProps>`
  margin-top: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1rem;

    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.015em;
    font-weight: 600;
  }

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          padding: 1rem;
        `
      : css`
          padding: 2rem 6rem;

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            padding: 1rem 4rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            padding: 1rem 2rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.SM}px) {
            padding: 1rem;
          }
        `}
`;
