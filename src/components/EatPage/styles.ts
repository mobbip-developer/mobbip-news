import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

export const ContentWrapper = styled.main`
  padding: 2rem 6rem;

  h1 {
    margin-bottom: 1rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.LG}px) {
    padding: 2rem 4rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.MD}px) {
    padding: 2rem 2rem;
  }

  @media (max-width: ${ScreenSizeValueEnum.SM}px) {
    padding: 1rem;
  }
`;
