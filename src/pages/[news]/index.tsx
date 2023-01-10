import { GetStaticPaths } from 'next';

import {
  NewsArticle as NewsArticleTemplate,
  NewsArticleProps,
  getStaticProps,
} from '~/templates/news/pages/NewsPost';

export default function NewsArticle(props: NewsArticleProps) {
  return <NewsArticleTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export { getStaticProps };
