import { useState } from 'react';

import { useRouter } from 'next/router';

import { PhoneCarouselSection } from '~/components/sections/PhoneCarousel';
import { PostCarouselSection } from '~/components/sections/PostCarousel';
import {
  PostListSection,
  OnPagination,
  Pagination,
} from '~/components/sections/PostList';
import { Meta } from '~/components/SEO/Meta';
import { useTheme } from '~/hooks/theme';
import { contentByLocale } from '~/locales';
import type { Page } from '~/types/cms/page';
import type { Product } from '~/types/product/product';

import { Breadcrumb } from '../Breadcrumb';
import * as S from './styles';

type HomeProps = {
  posts?: Page[];
  products?: Product[];
  news?: Page[];
  stories?: Page[];
  sectionTitles?: {
    featuredPosts?: string;
    lastPosts?: string;
    products?: string;
    news?: string;
    webStories?: string;
  };
  meta?: {
    title?: string;
    description?: string;
  };
  breadcrumb?: { text: string; link: string }[];
  onPagination: OnPagination;
  pagination?: Pagination;
};

export function Home({
  posts: providedPosts = [],
  sectionTitles = {},
  breadcrumb = [],
  products = [],
  meta = {},
  news = [],
  stories = [],
  pagination,
  onPagination,
}: HomeProps) {
  const [posts, setPosts] = useState(providedPosts);
  const [totalPosts, setTotalPosts] = useState(
    pagination?.total || posts.length,
  );

  const { locale } = useRouter();
  const { isDark } = useTheme();

  const content = contentByLocale[locale].pages.home;
  const featuredPosts = posts.slice(0, 8);
  const lastPosts = posts.slice(8, posts.length);

  const paginationEnabled =
    !!pagination && !!onPagination && !!setPosts && posts.length < totalPosts;

  return (
    <>
      <Meta
        title={meta.title || content.meta.title}
        description={meta.description || content.meta.description}
        canonical="https://mobbip.com"
        imageUrl="/images/og.jpg"
        imageAlt="Mobbip"
      />

      <S.Wrapper>
        {!!breadcrumb.length && (
          <S.BreadcrumbWrapper>
            <Breadcrumb items={breadcrumb} />
          </S.BreadcrumbWrapper>
        )}

        {!!featuredPosts.length && (
          <S.PostCarouselSectionWrapper>
            <PostCarouselSection posts={featuredPosts} />
          </S.PostCarouselSectionWrapper>
        )}

        {!!news.length && (
          <S.PhoneCarouselSectionWrapper isDark={isDark} marginTop="2rem">
            <h2>{sectionTitles.news}</h2>
            <PostCarouselSection
              tagTitle="h3"
              posts={news}
              breakpoints={{
                XL: { items: 2, slidesToSlide: 2, partialVisibilityGutter: 20 },
                LG: { items: 2, slidesToSlide: 2, partialVisibilityGutter: 20 },
                MD: { items: 1, slidesToSlide: 1, partialVisibilityGutter: 20 },
                SM: { items: 1 },
              }}
            />
          </S.PhoneCarouselSectionWrapper>
        )}

        {!!stories.length && (
          <S.PhoneCarouselSectionWrapper isDark={isDark}>
            <h2>{sectionTitles.webStories || 'Stories'}</h2>
            <PostListSection
              linkConfig={{ useHtmlTag: true }}
              posts={stories.slice(0, 8)}
            />
          </S.PhoneCarouselSectionWrapper>
        )}

        {!!products.length && (
          <S.PhoneCarouselSectionWrapper isDark={isDark} paddingBottom="3rem">
            <h2>{sectionTitles.products || content.phones}</h2>
            <PhoneCarouselSection products={products} />
          </S.PhoneCarouselSectionWrapper>
        )}

        {!!lastPosts.length && (
          <S.PostListSectionWrapper>
            <h2>{sectionTitles.lastPosts || content.lastPosts}</h2>
            <PostListSection
              paginationEnabled={paginationEnabled}
              setTotalPosts={setTotalPosts}
              onPagination={onPagination}
              pagination={pagination}
              setPosts={setPosts}
              posts={lastPosts}
            />
          </S.PostListSectionWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
