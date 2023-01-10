import { Carousel } from '~/components/Carousel';
import { ScreenSize } from '~/constants/screen.constants';
import type { Page } from '~/types/cms/page';

import { Post } from './Post';

type Breakpoint = {
  [key in ScreenSize]: {
    items: number;
    slidesToSlide?: number;
    partialVisibilityGutter?: number;
  };
};

type PostCarouselSectionProps = {
  posts: Page[];
  breakpoints?: Breakpoint;
  tagTitle?: 'h2' | 'h3';
};

export const PostCarouselSection = ({
  posts,
  tagTitle,
  breakpoints = {
    XL: { items: 4, slidesToSlide: 4, partialVisibilityGutter: 20 },
    LG: { items: 3, slidesToSlide: 3, partialVisibilityGutter: 20 },
    MD: { items: 2, slidesToSlide: 2, partialVisibilityGutter: 20 },
    SM: { items: 1 },
  },
}: PostCarouselSectionProps) => (
  <Carousel
    autoPlay
    partialVisible
    autoPlaySpeed={10000}
    breakpoints={breakpoints}
  >
    {posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        path={post.path}
        image={{
          url: post?.featuredImage?.medium?.url,
          altText: post?.featuredImage?.alternativeText,
        }}
        category={post.category}
        tagTitle={tagTitle}
      />
    ))}
  </Carousel>
);
