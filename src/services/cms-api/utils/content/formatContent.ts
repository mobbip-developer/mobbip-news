import type { Content } from '../../types';

type FormatContentProps = {
  content: Content[];
  parentId: number;
};

export const removeUnwantedContent = (richText: string) =>
  richText
    .replace(/style="[^"]*"/g, '')
    .replace(/&nbsp;/g, '')
    .replace(/<p><br><\/p>/g, '')
    .replace(/<font/g, '<span')
    .replace(/<\/font/g, '</span')
    .replace(/<em/g, '<span')
    .replace(/<\/em/g, '</span')
    .replace(/(<(?!\/)[^>]+>)+(<\/[^>]+>)+/g, '');

export const formatContent = ({
  content = [],
  parentId,
}: FormatContentProps): Content[] => {
  const formattedContent: Content[] = content.map(component => ({
    ...component,
    id: `${parentId}-${component.id}-${component.__component}`,

    ...(component.__component === 'primary.rich-text'
      ? { rich_text: removeUnwantedContent(component.rich_text) }
      : {}),

    ...(component.__component === 'primary.accordion-group'
      ? {
          accordion_group: component.accordion_group.map(accordion => ({
            ...accordion,
            content: removeUnwantedContent(accordion.content),
          })),
        }
      : {}),
  }));

  return formattedContent;
};
