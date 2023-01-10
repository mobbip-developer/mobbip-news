import { Carousel } from '~/components/Carousel';
import { PhoneCard } from '~/components/PhoneCard';
import type { Product } from '~/types/product/product';

type PhoneCarouselSectionProps = {
  products: Product[];
};

export const PhoneCarouselSection = ({
  products,
}: PhoneCarouselSectionProps) => (
  <Carousel
    autoPlay={false}
    partialVisible
    breakpoints={{
      XL: { items: 5, slidesToSlide: 5, partialVisibilityGutter: 10 },
      LG: { items: 4, slidesToSlide: 4, partialVisibilityGutter: 10 },
      MD: { items: 2, slidesToSlide: 2, partialVisibilityGutter: 10 },
      SM: { items: 1 },
    }}
  >
    {products.map(product => (
      <PhoneCard
        key={product._id}
        name={product?.name}
        path={product.path}
        image={{
          url: product?.imageUrl?.thumbnail,
          altText: product?.name,
        }}
      />
    ))}
  </Carousel>
);
