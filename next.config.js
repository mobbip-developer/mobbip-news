/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    domains: [
      'mobbip-public-phone-images.s3.us-east-1.amazonaws.com',
      'mobbip-prod-cms-resource.s3.us-east-1.amazonaws.com',
      'mobbip-prod-cms-resource.s3.amazonaws.com',
      'mobbip-prod-product-resource.s3.us-east-1.amazonaws.com',
      'mobbip-prod-product-resource.s3.amazonaws.com',
      'm.media-amazon.com',
      'images-na.ssl-images-amazon.com',
      'stories.mobbip.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path',
        destination: 'https://mobbip.com',
        permanent: true,
      },
      {
        source: '/lg/ice-cream-smart',
        destination: '/products/lg/ice-cream-smart',
        permanent: true,
      },
      {
        source: '/smartisan/jianguo-pro-3',
        destination: '/products/smartisan/jianguo-pro-3',
        permanent: true,
      },
      {
        source: '/itel/s17',
        destination: '/products/itel/s17',
        permanent: true,
      },
      {
        source: '/micromax/q1c',
        destination: '/products/micromax/q1c',
        permanent: true,
      },
      {
        source: '/lg/t375',
        destination: '/products/lg/t375',
        permanent: true,
      },
      {
        source: '/micromax/bolt-a24',
        destination: '/products/micromax/bolt-a24',
        permanent: true,
      },
      {
        source: '/infinix/hot-10t',
        destination: '/products/infinix/hot-10t',
        permanent: true,
      },
      {
        source: '/lenovo/legion-phone-duel-2',
        destination: '/products/lenovo/legion-phone-duel-2',
        permanent: true,
      },
      {
        source: '/huawei/nova-5i-pro',
        destination: '/products/huawei/nova-5i-pro',
        permanent: true,
      },
      {
        source: '/blu/s1',
        destination: '/products/blu/s1',
        permanent: true,
      },
      {
        source: '/tecno/spark-8c',
        destination: '/products/tecno/spark-8c',
        permanent: true,
      },
      {
        source: '/black-shark/2',
        destination: '/products/black-shark/2',
        permanent: true,
      },
      {
        source: '/infocus/m808',
        destination: '/products/infocus/m808',
        permanent: true,
      },
      {
        source: '/lg/g3-beat',
        destination: '/products/lg/g3-beat',
        permanent: true,
      },
      {
        source: '/oppo/reno-6-lite',
        destination: '/products/oppo/reno-6-lite',
        permanent: true,
      },
      {
        source:
          '/recomendacoes/saiba-quais-sao-os-12-melhores-filmes-de-desenho-netflix-lancamentos',
        destination:
          '/recomendacoes/melhores-filmes-de-desenho-netflix-lancamentos',
        permanent: true,
      },
    ];
  },
};

//saiba-quais-sao-os-12-melhores-filmes-de-desenho-netflix-lancamentos

module.exports = nextConfig;
