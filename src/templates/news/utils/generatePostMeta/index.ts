import { META_TITLE_MAX_LENGTH } from '~/constants/seo.constants';
import type { News } from '~/interfaces/news.interface';
import { Meta } from '~/types/seo/meta';

type GeneratePostMetaProps = {
  post: News;
};

const treatTitle = (post: News): string => {
  let { title } = post;

  const suffix = '| Mobbip';

  if ((title + suffix).length < META_TITLE_MAX_LENGTH) {
    title = `${title}${suffix}`;
  }

  return title;
};

const treatDescription = (post: News): string =>
  `${post.title}. Mobbip, tudo sobre o imenso universo da tecnologia!`;

export const generatePostMeta = ({ post }: GeneratePostMetaProps): Meta => ({
  title: post.meta?.title || treatTitle(post),
  description: post.meta?.description || treatDescription(post),
  canonical: post.url,
  imageUrl: post.featuredImage?.original?.url || null,
  imageAlt: post.featuredImage?.alternativeText || null,
});
