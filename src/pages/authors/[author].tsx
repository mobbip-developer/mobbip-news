import { GetStaticPaths } from 'next';

import {
  Author as AuthorTemplate,
  AuthorProps,
  getStaticProps,
} from '~/templates/author/pages';

export default function Author(props: AuthorProps) {
  return <AuthorTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export { getStaticProps };
