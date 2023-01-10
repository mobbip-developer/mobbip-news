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
  position: relative;

  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;

  background: #f8f8f8;
`;

export const HeaderContent = styled.div<AmpProps>`
  position: relative;

  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 100%;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 90%);

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    color: ${({ theme }) => theme.colors.gray[100]};
    color: #fff;

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
      -webkit-line-clamp: 5;
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

export const FeaturedImageWrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 20rem;

  overflow: hidden;

  img,
  amp-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Article = styled.article<AmpProps>`
  margin: 0 auto;

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          max-width: 600px;
          padding: 0 1rem;
        `
      : css`
          max-width: 1120px;
          padding: 0 3rem;

          > div {
            > p,
            > figure,
            > ul,
            > ol,
            > h1,
            > h2,
            > h3,
            > h4,
            > h5,
            > h6,
            > .chakra-accordion {
              margin-left: calc((100% - 700px) / 2);
              margin-right: calc((100% - 700px) / 2);
            }

            > ul > li,
            > ol > li {
              max-width: calc(700px - 1.5rem);
              margin-left: calc((100% - 700px) / 2 + 1.5rem);
            }
          }

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            padding: 0 2rem;

            > div {
              > p,
              > figure,
              > ul,
              > ol,
              > h1,
              > h2,
              > h3,
              > h4,
              > h5,
              > h6,
              > .chakra-accordion {
                margin-left: 0;
                margin-right: 0;
              }

              > ul > li,
              > ol > li {
                max-width: unset;
                margin-left: 1.5rem;
              }
            }
          }

          @media (max-width: ${ScreenSizeValueEnum.MD}px) {
            padding: 0 2rem;
          }

          @media (max-width: ${ScreenSizeValueEnum.SM}px) {
            padding: 0 1rem;
          }
        `}
`;

export const AuthorSectionWrapper = styled.section<ThemeProps & AmpProps>`
  margin-top: 3rem;

  padding: 1rem;
  border-radius: 0.5rem;

  background: ${({ theme, isDark }) => theme.colors.gray[isDark ? 950 : 50]};

  ${({ isAmp = false }) =>
    isAmp
      ? css`
          padding: 1rem;
        `
      : css`
          max-width: 1120px;
          margin-left: calc((100% - 700px) / 2);
          margin-right: calc((100% - 700px) / 2);

          @media (max-width: ${ScreenSizeValueEnum.LG}px) {
            margin-left: 0;
            margin-right: 0;
          }
        `}
`;

export const PostListSectionWrapper = styled.section<ThemeProps & AmpProps>`
  margin-top: 3rem;

  background: ${({ theme, isDark }) => theme.colors.gray[isDark ? 950 : 50]};

  h2 {
    margin-bottom: 1rem;

    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.015em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
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

export const SourceWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: dashed 1px #0002;

  color: ${({ theme }) => theme.colors.text};
`;
