import styled from '@emotion/styled';

type TextLogoSpanProps = {
  isDark?: boolean;
  isMobile?: boolean;
};

export const TextLogoSpan = styled.span<TextLogoSpanProps>`
  color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
  font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '2.375rem')};
  letter-spacing: -0.04em;
  font-weight: 700;

  > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
