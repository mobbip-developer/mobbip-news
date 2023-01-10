import { ThemeEnum } from '~/constants/theme.constants';
import { useScreen } from '~/hooks/screen';

import * as S from './styles';

type TextLogoProps = {
  theme?: ThemeEnum;
};

export const TextLogo = ({ theme }: TextLogoProps) => {
  const { isMobile } = useScreen();

  const isDark = theme === ThemeEnum.DARK;

  return (
    <S.TextLogoSpan isDark={isDark} isMobile={isMobile}>
      mob<span>bip</span>
    </S.TextLogoSpan>
  );
};
