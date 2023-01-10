import { Image } from '~/components/Image';
import { Link } from '~/components/Link';
import { SocialProfiles } from '~/components/SocialProfiles';

import * as S from './styles';

export type AuthorSectionProps = {
  name: string;
  initials: string;
  link: string;
  description?: string;
  image?: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export const AuthorSection = ({
  name,
  initials,
  description,
  link,
  image,
  socialLinks,
}: AuthorSectionProps) => (
  <S.Wrapper>
    <Link href={link}>
      <S.ImageWrapper>
        {image ? (
          <Image
            src={image}
            width={132}
            height={132}
            alt={`Autor ${name}`}
            ampLayout="fixed"
            containerStyle={{ width: 132, height: 132 }}
          />
        ) : (
          <span>{initials}</span>
        )}
      </S.ImageWrapper>
    </Link>

    <div>
      <Link href={link}>
        <h2>{name}</h2>
      </Link>
      {description && <p>{description}</p>}

      <SocialProfiles {...socialLinks} />
    </div>
  </S.Wrapper>
);
