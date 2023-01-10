import { ReactNode } from 'react';

import { useAmp } from 'next/amp';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { Menu } from '~/components/Menu';

import * as S from './styles';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const isAmp = useAmp();

  return (
    <S.Wrapper isAmp={isAmp}>
      <Menu />
      <div>
        <Header />
        <S.ContainerWrapper isAmp={isAmp}>
          <S.Container isAmp={isAmp}>
            {children}
            <Footer />
          </S.Container>
        </S.ContainerWrapper>
      </div>
    </S.Wrapper>
  );
};
