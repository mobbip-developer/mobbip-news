import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Image } from '~/components/Image';
import { contentByLocale } from '~/locales';

import * as S from './styles';

type PhoneCardProps = {
  name: string;
  path: string;
  image: {
    url?: string;
    altText?: string | null;
  };
};

export const PhoneCard = ({ name, path, image }: PhoneCardProps) => {
  const { locale } = useRouter();
  const content = contentByLocale[locale].components.PhoneCard;

  return (
    <S.PhoneWrapper>
      <div>
        <S.ImageWrapper>
          <Image
            src={image.url || '/images/phone.jpg'}
            alt={image.altText || name}
            fallbackSrc="/images/phone.jpg"
            layout="fill"
          />
        </S.ImageWrapper>

        <span>{name}</span>

        <NextLink href={path} passHref>
          <a>{content.seeTechnicalSheet}</a>
        </NextLink>
      </div>
    </S.PhoneWrapper>
  );
};
