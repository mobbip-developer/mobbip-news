import { Image } from '~/components/Image';
import { Link } from '~/components/Link';
import type { Category } from '~/types/cms/category';

import * as S from './styles';

type PostProps = {
  title: string;
  path: string;
  image: {
    url?: string;
    altText?: string | null;
  };
  category?: Category;
  tagTitle?: 'h2' | 'h3';
};

const renderTitle = ({
  tagTitle,
  title,
}: {
  tagTitle: 'h2' | 'h3';
  title: string;
}) => {
  if (tagTitle === 'h3') {
    return <h3 className="title">{title}</h3>;
  }

  return <h2 className="title">{title}</h2>;
};

export const Post = ({
  title,
  path,
  image,
  category,
  tagTitle = 'h2',
}: PostProps) => (
  <S.PostWrapper>
    <Link href={path}>
      <div>
        <S.ImageWrapper>
          <Image
            src={image.url || '/images/placeholder.jpg'}
            alt={image.altText || title}
            layout="fill"
          />
        </S.ImageWrapper>

        <S.WrapperText>
          {category && <span>{category?.name}</span>}

          {renderTitle({ tagTitle, title })}
        </S.WrapperText>
      </div>
    </Link>
  </S.PostWrapper>
);
