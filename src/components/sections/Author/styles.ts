import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  color: ${({ theme }) => theme.colors.text};

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: ${ScreenSizeValueEnum.SM}px) {
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 132px;
  border-radius: 50%;

  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary};

  img,
  amp-img {
    object-fit: cover;
  }

  span {
    color: #fff;
    font-size: 3rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.SM}px) {
    margin: 0 auto;
  }
`;
