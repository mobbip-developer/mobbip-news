import { META_DESCRIPTION_MAX_LENGTH } from '~/constants/seo.constants';
import { htmlToText } from '~/utils/html';

import type { Content, PrimaryRichText } from '../../types';

type GetMetaDescriptionFromContent = {
  content: Content[];
};

export const getMetaDescriptionFromContent = ({
  content,
}: GetMetaDescriptionFromContent): string | null => {
  if (!content || content.length === 0) {
    return null;
  }

  const richTextComponents = content.filter(
    component => component.__component === 'primary.rich-text',
  ) as PrimaryRichText[];

  if (richTextComponents.length === 0) {
    return null;
  }

  const text = richTextComponents.reduce((previousValue, currentValue) => {
    if (previousValue.length < META_DESCRIPTION_MAX_LENGTH) {
      return previousValue + htmlToText(currentValue.rich_text);
    }
    return previousValue;
  }, '');

  return `${text.slice(0, META_DESCRIPTION_MAX_LENGTH - 3)}...`;
};
