import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

type WrapperProps = {
  isDark?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 100vw;
`;

export const BreadcrumbWrapper = styled.div`
  padding: 1rem 2rem 0rem 2rem;
`;

export const PostCarouselSectionWrapper = styled.section`
  padding-top: 1rem;
`;

export const PhoneCarouselSectionWrapper = styled.section<{
  paddingBottom?: string;
  marginTop?: string;
  isDark?: boolean;
  backgroundColor?: string;
}>`
  position: relative;

  max-width: 100%;
  padding: 2rem 4rem;
  padding-bottom: ${({ paddingBottom = '0' }) => paddingBottom};
  margin-top: ${({ marginTop = '0' }) => marginTop};

  background: ${({ theme, isDark, backgroundColor }) =>
    backgroundColor || theme.colors.gray[isDark ? 950 : 50]};

  h2 {
    margin-bottom: 1rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.015em;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${ScreenSizeValueEnum.LG}px) {
    padding: 2rem 4rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.MD}px) {
    padding: 2rem 2rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.SM}px) {
    padding: 2rem 1rem;
  }
`;

export const PostListSectionWrapper = styled.section`
  margin-top: 2rem;
  padding: 2rem 6rem;

  h2 {
    margin-bottom: 1rem;

    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 0.015em;
    font-weight: 600;
  }

  button {
    margin: 1.5rem auto 0 auto;
  }

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

export const Post = styled.div`
  width: 100%;
  height: 100%;
  height: 22.5rem;

  padding: 0 0.75rem;

  div {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;

    background: #aaa;

    cursor: pointer;
    overflow: hidden;
  }
`;
