import { GetStaticProps } from 'next';

import { useAmp } from 'next/amp';
import dynamic from 'next/dynamic';

import { Breadcrumb } from '~/components/Breadcrumb';
import { Image } from '~/components/Image';
import { Link } from '~/components/Link';
import type { AuthorSectionProps } from '~/components/sections/Author';
import type { PostListSectionProps } from '~/components/sections/PostList';
import { NewsArticleSD } from '~/components/SEO';
import { Meta } from '~/components/SEO/Meta';
import { StrapiRenderer } from '~/components/StrapiRenderer';
import { revalidate } from '~/configs/revalidate.config';
import { PathsEnum } from '~/constants/paths.constants';
import { useTheme } from '~/hooks/theme';
import type { News } from '~/interfaces/news.interface';
import type { Meta as MetaType } from '~/types/seo/meta';

import * as S from './styles';

const PostListSection = dynamic<PostListSectionProps>(() =>
  import('~/components/sections/PostList').then(mod => mod.PostListSection),
);

const AuthorSection = dynamic<AuthorSectionProps>(() =>
  import('~/components/sections/Author').then(mod => mod.AuthorSection),
);

export type NewsArticleProps = {
  lastNews: News[];
  newsPost: News;
  meta: MetaType;
};

export const NewsArticle = ({ lastNews, newsPost, meta }: NewsArticleProps) => {
  const { isDark } = useTheme();
  const isAmp = useAmp();

  return (
    <>
      <Meta {...meta} amphtml={!isAmp && `${meta?.canonical}/amp`} />

      {newsPost.structuredData && (
        <NewsArticleSD {...newsPost.structuredData} />
      )}

      <S.HeaderWrapper>
        {newsPost?.featuredImage && (
          <S.FeaturedImageWrapper>
            <Image
              key={newsPost.id}
              src={newsPost.featuredImage.original.url}
              alt={
                newsPost.featuredImage.alternativeText ||
                newsPost.featuredImage?.name
              }
              fallbackSrc="/images/placeholder.jpg"
              layout="fill"
              priority
            />
          </S.FeaturedImageWrapper>
        )}
        <S.HeaderContent isAmp={isAmp}>
          <div>
            <Breadcrumb
              items={[
                { text: 'Home', link: PathsEnum.Home },
                { text: 'Notícias', link: PathsEnum.News },
              ]}
            />
            <h1>{newsPost?.title}</h1>

            <span>
              {newsPost?.author && (
                <>
                  Por{' '}
                  <Link href={`/authors/${newsPost.author.slug}`}>
                    {newsPost.author?.name}
                  </Link>
                </>
              )}
              {newsPost?.publishedAt && <> &middot; {newsPost?.publishedAt}</>}
            </span>
          </div>
        </S.HeaderContent>
      </S.HeaderWrapper>

      <S.Article isAmp={isAmp}>
        <StrapiRenderer
          content={[
            {
              __component: 'primary.rich-text',
              id: `newsPost-id-${newsPost.id}`,
              rich_text: newsPost?.content,
            },
          ]}
        />

        <S.SourceWrapper>
          <span>Traduzido de: {newsPost.sourceUrl}</span>
        </S.SourceWrapper>

        {newsPost?.author && (
          <S.AuthorSectionWrapper isDark={isDark} isAmp={isAmp}>
            <AuthorSection
              name={newsPost.author?.name}
              initials={newsPost.author?.initials}
              link={`/authors/${newsPost.author?.slug}`}
              socialLinks={{
                facebook: newsPost.author?.facebookUrl,
                twitter: newsPost.author?.twitterUrl,
                instagram: newsPost.author?.instagramUrl,
                linkedin: newsPost.author?.linkedinUrl,
              }}
              description={newsPost.author?.description}
              image={newsPost.author?.photo?.medium?.url}
            />
          </S.AuthorSectionWrapper>
        )}
      </S.Article>

      <S.PostListSectionWrapper isDark={isDark} isAmp={isAmp}>
        <h2>Outras notícias</h2>
        <PostListSection posts={lastNews} />
      </S.PostListSectionWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params = {},
}) => {
  const { getNews } = await import('~/services/cms-api/functions/getNews');

  const { news: newsSlug } = params;

  const newsPromise = getNews({
    pageSize: 1,
    slug: newsSlug,
    preview,
    populate: {
      featured_image: true,
      author: true,
      meta: true,
    },
  });

  const lastNewsPromise = getNews({
    pageSize: 9,
    populate: {
      featured_image: true,
    },
  });

  const [
    {
      news: [newsPost],
    },
    { news: lastNews = [] },
  ] = await Promise.all([newsPromise, lastNewsPromise]);

  if (!newsPost) {
    return { notFound: true, revalidate: 1 };
  }

  const { generatePostMeta } = await import('../../utils/generatePostMeta');
  const meta = generatePostMeta({ post: newsPost });
  const lastNewsWithoutMainNews = lastNews
    .filter(news => news.id !== newsPost.id)
    .slice(0, 8);

  return {
    props: {
      lastNews: lastNewsWithoutMainNews,
      newsPost,
      meta,
    },
    revalidate: revalidate.news['[news]'],
  };
};
