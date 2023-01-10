import { useMemo } from 'react';

import { css, Global } from '@emotion/react';

import { ThemeEnum } from '~/constants/theme.constants';
import { useTheme } from '~/hooks/theme';

import { ScreenSizeValueEnum } from '../constants/screen.constants';
import { themes } from './themes';

export const GlobalStyles = () => {
  const { theme: themeName } = useTheme();
  const theme = useMemo(
    () => themes[themeName || ThemeEnum.LIGHT],
    [themeName],
  );

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }

        body,
        input,
        textarea,
        select,
        button {
          font: 400 1rem 'Poppins', sans-serif;
        }

        button {
          border-radius: 8px;

          cursor: pointer;
          background: transparent;
          border: none;

          &:focus {
            outline: 1px solid ${theme.colors.primary};
          }
        }

        .container {
          background: ${theme.colors.container};
          color: ${theme.colors.text};
        }

        .react-multiple-carousel__arrow {
          z-index: 5;

          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: none;

          background: ${theme.colors.primary};

          transition: 0.3s;

          &:hover {
            filter: brightness(1.1);
            box-shadow: 0 0 16px #0007;
          }
        }

        @media (max-width: ${ScreenSizeValueEnum.SM}px) {
          h1 {
            font-size: 1.75rem;
          }
        }
      `}
    />
  );
};
