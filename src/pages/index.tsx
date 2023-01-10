import { GetStaticProps } from 'next';

import { Home } from '~/components/Home';
import { Organization as OrganizationSD } from '~/components/SEO/StructuredData/Organization';
import { revalidate } from '~/configs';
import { PathsEnum } from '~/constants/paths.constants';
import { getNews } from '~/services/cms-api/functions/getNews';
import type { Page } from '~/types/cms/page';

type HomeNewsProps = {
  totalNews: number;
  news: Page[];
};

export default function HomeNews({ news, totalNews }: HomeNewsProps) {
  const onPagination = async ({ page }: { page: number }) => {
    const { pagination, news: newsArticles } = await getNews({
      pageSize: 28,
      proxy: true,
      page,
      populate: {
        featured_image: true,
      },
    });

    return { total: pagination.total, posts: newsArticles };
  };

  return (
    <>
      <OrganizationSD />

      <Home
        sectionTitles={{ lastPosts: 'Últimas notícias' }}
        pagination={{ total: totalNews, page: 1 }}
        onPagination={onPagination}
        posts={news}
        breadcrumb={[{ text: 'Home', link: PathsEnum.Home }]}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { news, pagination } = await getNews({
    pageSize: 28,
    populate: {
      featured_image: true,
    },
  });

  return {
    props: {
      totalNews: pagination.total,
      news,
    },
    revalidate: revalidate.news.index,
  };
};
