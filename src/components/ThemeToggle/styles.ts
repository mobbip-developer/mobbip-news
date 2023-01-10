import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';
import { ThemeEnum } from '~/constants/theme.constants';
import { themes } from '~/styles/themes';

type ButtonProps = {
  siteTheme: ThemeEnum;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  border: none;

  transition: 0.5s;
  background: transparent;

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;

    transition: 0.2s;
    color: ${({ siteTheme }) =>
      siteTheme === ThemeEnum.DARK
        ? themes.light.colors.background
        : themes.dark.colors.background};
  }

  @media (max-width: ${ScreenSizeValueEnum.MD}px) {
    svg {
      color: ${() => themes.light.colors.background};
    }
  }
`;
