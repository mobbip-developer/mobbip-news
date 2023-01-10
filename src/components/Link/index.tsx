import { ReactNode } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type Rel = 'nofollow' | 'sponsored' | 'ugc' | 'external';

interface LinkProps extends NextLinkProps {
  useOnlyNextLink?: boolean;
  useHtmlTag?: boolean;
  children: ReactNode;
  ariaLabel?: string;
  target?: '_blank';
  rel?: Rel[];
}

export function Link({
  ariaLabel,
  children,
  target,
  href,
  useOnlyNextLink = false,
  useHtmlTag = false,
  rel = [],
  ...rest
}: LinkProps) {
  const defaultRel = target === '_blank' ? ['noopener', 'noreferrer'] : [];
  const uniqueRelValues = [...Array.from(new Set([...defaultRel, ...rel]))];

  const tagAProps = {
    ...(uniqueRelValues.length ? { rel: uniqueRelValues.join(' ') } : {}),
    ...(target ? { target } : {}),
    'aria-label': ariaLabel,
  };

  if (useHtmlTag && typeof href === 'string') {
    return (
      <a href={href} {...tagAProps}>
        {children}
      </a>
    );
  }

  if (useOnlyNextLink && typeof href === 'string') {
    return (
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} passHref {...rest}>
      <a {...tagAProps}>{children}</a>
    </NextLink>
  );
}
