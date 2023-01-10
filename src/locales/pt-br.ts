import { Locale } from './types';

export const ptBr: Locale = {
  pages: {
    home: {
      phones: 'Produtos',
      news: 'Notícias',
      lastPosts: 'Postagens recentes',
      meta: {
        title: 'Mobbip - Tudo sobre o universo da Tecnologia',
        description:
          'Mobbip é um portal de tecnologia para pessoas que querem se manter atualizadas com as últimas notícias, reviews, smartphones, dicas e tutoriais.',
      },
    },
  },
  components: {
    Menu: {
      items: {
        news: 'Notícias',
        webStories: 'Web Stories',
        contact: 'Contato',
        about: 'Sobre',
        rssFeed: 'RSS Feed',
      },
    },
    ErrorPage: {
      errors: {
        '404': {
          title: 'Erro 404',
          description:
            'Desculpe, não foi possível encontrar a página solicitada!',
        },
        '500': {
          title: 'Erro 500',
          description:
            'Ocorreu um erro inesperado. Por favor, seja paciente ou tente novamente mais tarde.',
        },
      },
      goHome: 'Voltar para página inicial',
    },
    PhoneCard: {
      seeTechnicalSheet: 'ver ficha técnica',
    },
    Footer: {
      featuredTopics: 'Temas em destaque',
      about: 'Sobre',
      aboutText:
        'O Mobbip é um portal criado para trazer informações e notícias sobre o universo da tecnologia. Contém uma base robusta de produtos, reviews, especificações técnicas, notícias e muito mais.',
      eat: {
        aboutUs: 'Sobre nós',
        privacyPolicy: 'Política de privacidade',
        cookiePolicy: 'Política de cookies',
        contact: 'Contato',
        webStories: 'Web Stories',
        sitemap: 'Sitemap',
      },
      topics: {
        companies: 'Empresas',
        products: 'Produtos',
        games: 'Jogos',
        recommendations: 'Recomendações',
        samsung: 'Samsung',
        apple: 'Apple',
        motorola: 'Motorola',
        xiaomi: 'Xiaomi',
        tutorials: 'Tutoriais',
        news: 'Notícias',
      },
    },
  },
};
