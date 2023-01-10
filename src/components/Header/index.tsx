import { ReactNode, useMemo } from 'react';

import { useAmp } from 'next/amp';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { ThemeEnum } from '~/constants/theme.constants';
import { useScreen } from '~/hooks/screen';

import { Link } from '../Link';
import type { LogoProps } from '../Logo';
import * as S from './styles';

const ThemeToggle = dynamic(
  () => import('../ThemeToggle').then(mod => mod.ThemeToggle),
  { ssr: false },
);

const Logo = dynamic<LogoProps>(() => import('../Logo').then(mod => mod.Logo));

type LogoWrapperProps = {
  children: ReactNode;
};

const LogoWrapper = ({ children }: LogoWrapperProps) =>
  useRouter().asPath === '/' ? (
    <h1>{children}</h1>
  ) : (
    <Link href="/">{children}</Link>
  );

export const Header = () => {
  const { isMobile } = useScreen();
  const isAmp = useAmp();
  const logoSize = useMemo(
    () => ({
      width: 145.2 / (isMobile ? 1.5 : 1),
      height: 42 / (isMobile ? 1.5 : 1),
    }),
    [isMobile],
  );

  return (
    <S.Header isAmp={isAmp}>
      <LogoWrapper>
        <Logo
          width={logoSize.width}
          height={logoSize.height}
          theme={isMobile && ThemeEnum.DARK}
        />
      </LogoWrapper>

      {!isAmp && (
        <S.ThemeToggleWrapper>
          <ThemeToggle />
        </S.ThemeToggleWrapper>
      )}
    </S.Header>
  );
};
