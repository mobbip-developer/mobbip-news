import styled from '@emotion/styled';

import { ScreenSizeValueEnum } from '~/constants/screen.constants';

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 20;

  width: 4rem;
  height: 100vh;
  padding: 1rem 0.5rem;

  background: ${({ theme }) => theme.colors.gray[800]};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${ScreenSizeValueEnum.MD}px) {
    position: fixed;

    height: 3.5rem;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.gray[50]};
    width: 1.5rem;
    height: 1.5rem;

    transition: color 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.colors.gray[300]};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    transition: 0.2s;

    &:hover {
      background: #fff1;

      transition: 0.2s;

      svg {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const MenuItemsWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.colors.text};
  }

  a {
    display: flex;
    align-items: center;

    padding: 1rem 0;

    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
