import { useAmp } from 'next/amp';

import { PhoneCard } from '~/components/PhoneCard';
import type { Product } from '~/types/product/product';

import * as S from './styles';

export type PhoneListSectionProps = {
  products: Product[];
};

export const PhoneListSection = ({ products = [] }: PhoneListSectionProps) => {
  const isAmp = useAmp();

  return (
    <S.Wrapper isAmp={isAmp}>
      {products.map(product => (
        <PhoneCard
          key={product._id}
          name={product?.name}
          path={product.path}
          image={{
            url: product?.imageUrl?.thumbnail,
            altText: product?.name,
          }}
        />
      ))}
    </S.Wrapper>
  );
};
