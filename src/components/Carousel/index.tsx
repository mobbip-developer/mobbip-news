import 'react-multi-carousel/lib/styles.css';
import { ReactNode } from 'react';

import MultiCarousel, {
  CarouselProps as MultiCarouselProps,
} from 'react-multi-carousel';

import { ScreenSize, ScreenSizeValueEnum } from '~/constants/screen.constants';

interface CarouselProps extends Partial<MultiCarouselProps> {
  children: ReactNode;
  firstItemPadding?: string;
  fakeLastItem?: boolean;
  breakpoints?: {
    [key in ScreenSize]: {
      items: number;
      slidesToSlide?: number;
      partialVisibilityGutter?: number;
    };
  };
  perStepScreen?: { [key in ScreenSize]: number };
}

const DEFAULT_BREAKPOINTS = {
  XL: {
    items: 5,
  },
  LG: {
    items: 4,
  },
  MD: {
    items: 2,
  },
  SM: {
    items: 1,
  },
};

export function Carousel({
  breakpoints = DEFAULT_BREAKPOINTS,
  children,
  ...props
}: CarouselProps) {
  const responsive = {
    xl: {
      breakpoint: { max: Infinity, min: ScreenSizeValueEnum.XL },
      partialVisibilityGutter: 10,
      ...breakpoints.XL,
    },
    lg: {
      breakpoint: { max: ScreenSizeValueEnum.XL, min: ScreenSizeValueEnum.LG },
      partialVisibilityGutter: 10,
      ...breakpoints.LG,
    },
    md: {
      breakpoint: { max: ScreenSizeValueEnum.LG, min: ScreenSizeValueEnum.MD },
      partialVisibilityGutter: 10,
      ...breakpoints.MD,
    },
    sm: {
      breakpoint: { max: ScreenSizeValueEnum.MD, min: 0 },
      partialVisibilityGutter: 10,
      ...breakpoints.SM,
    },
  };

  return (
    <MultiCarousel responsive={responsive} ssr={true} {...props}>
      {children}
    </MultiCarousel>
  );
}
