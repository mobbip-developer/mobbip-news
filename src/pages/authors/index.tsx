import { GetStaticProps } from 'next';

import { Breadcrumb } from '~/components/Breadcrumb';
import { AuthorSection } from '~/components/sections/Author';
import { Meta } from '~/components/SEO/Meta';
import { revalidate } from '~/configs';
import * as S from '~/templates/author/pages/styles';
import type { Author } from '~/types/cms/author';

type AuthorsProps = {
  authors: Author[];
};

export default function Authors({ authors }: AuthorsProps) {
  return (
    <>
      <Meta
        title={`Autores - Mobbip`}
        description={`Autores - Mobbip`}
        canonical="https://mobbip.com/authors"
        imageUrl="/images/og.jpg"
        imageAlt="Mobbip"
      />

      <S.HeaderWrapper>
        <S.HeaderContent>
          <div>
            <Breadcrumb hideLastItem />
            <h1>Nossa equipe</h1>
          </div>
        </S.HeaderContent>
      </S.HeaderWrapper>

      <S.AuthorsSectionWrapper>
        {authors.map(author => (
          <AuthorSection
            key={author.id}
            name={author?.name}
            initials={author?.initials}
            link={`/authors/${author?.slug}`}
            socialLinks={{
              facebook: author?.facebookUrl,
              twitter: author?.twitterUrl,
              instagram: author?.instagramUrl,
              linkedin: author?.linkedinUrl,
            }}
            description={author?.description}
            image={author?.photo?.medium?.url}
          />
        ))}
      </S.AuthorsSectionWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { getAuthors } = await import(
    '~/services/cms-api/functions/getAuthors'
  );

  const { authors } = await getAuthors({});

  return {
    props: {
      authors,
    },
    revalidate: revalidate.authors.index,
  };
};
