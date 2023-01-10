import { GetStaticProps } from 'next';

import { Breadcrumb } from '~/components/Breadcrumb';
import { Image } from '~/components/Image';
import { PostListSection } from '~/components/sections/PostList';
import { Meta } from '~/components/SEO/Meta';
import { SocialProfiles } from '~/components/SocialProfiles';
import { revalidate } from '~/configs';
import { PathsEnum } from '~/constants/paths.constants';
import { useTheme } from '~/hooks/theme';
import type { Author as AuthorType } from '~/types/cms-v2/author';
import type { Post } from '~/types/cms-v2/post';
import { Meta as MetaType } from '~/types/seo/meta';

import * as S from './styles';

export type AuthorProps = {
  meta: MetaType;
  author: AuthorType;
  posts: Post[];
};

export const Author = ({ meta, author, posts }: AuthorProps) => {
  const { isDark } = useTheme();

  return (
    <>
      <Meta {...meta} />

      <S.HeaderWrapper>
        <S.HeaderContent>
          <div>
            <Breadcrumb
              items={[
                { text: 'Home', link: '/' },
                { text: 'Autores', link: '/authors' },
              ]}
            />
            <div>
              {author?.photo?.medium?.url && (
                <S.ProfileImageWrapper>
                  <Image
                    src={author?.photo?.original?.url}
                    width={200}
                    height={200}
                    alt={`Autor ${author?.name}`}
                    ampLayout="fixed"
                  />
                </S.ProfileImageWrapper>
              )}
              <div>
                <h1>{author?.name}</h1>
                <SocialProfiles
                  facebook={author.facebookUrl}
                  instagram={author.instagramUrl}
                  linkedin={author.linkedinUrl}
                  twitter={author.twitterUrl}
                />
              </div>
            </div>
          </div>
        </S.HeaderContent>
      </S.HeaderWrapper>

      {author.description && (
        <S.AboutSection>
          <h2>Sobre</h2>

          <p>{author.description}</p>
        </S.AboutSection>
      )}

      <S.PostListSectionWrapper isDark={isDark}>
        {/* <h2>Postagens</h2> */}
        <PostListSection posts={posts} />
      </S.PostListSectionWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { getAuthors } = await import(
    '~/services/cms-api/functions/getAuthors'
  );

  const { SITE_URL_PROD } = await import('~/constants/environment.constants');

  const { author: authorSlug } = params;

  const authorsPromise = getAuthors({
    slug: authorSlug,
  });

  const [
    {
      authors: [author],
    },
  ] = await Promise.all([authorsPromise]);

  if (!author) {
    return { notFound: true, revalidate: 1 };
  }

  const canonical = `${SITE_URL_PROD}${PathsEnum.Authors}/${author.slug}`;

  const meta: MetaType = {
    canonical,
    title: author.name || `${author?.slug} - Mobbip`,
    description: author.description || `${author?.name} - Mobbip`,
    imageUrl: author.photo?.original?.url,
    imageAlt: `Autor ${author?.name}`,
  };

  return {
    props: {
      meta,
      author,
    },
    revalidate: revalidate.authors['[author]'],
  };
};
