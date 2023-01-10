type DifferenceInSecondsOptions = {
  abs?: boolean;
};

type FormatDate = {
  date?: Date | string;
  locale?: string;
};

export const differenceInSeconds = (
  date1: Date,
  date2: Date,
  options?: DifferenceInSecondsOptions,
): number => {
  const seconds = (date1.getTime() - date2.getTime()) / 1000;

  if (options?.abs) {
    return Math.abs(seconds);
  }

  return seconds;
};

export const isValidDate = (date: Date) =>
  // eslint-disable-next-line no-restricted-globals
  date instanceof Date && !isNaN(date.valueOf());

export const formatDate = ({
  date: providedDate,
  locale = 'pt-BR',
}: FormatDate) => {
  let date = providedDate;

  if (typeof date === 'string') {
    date = new Date(date);
  }

  if (!isValidDate(date)) {
    return '';
  }

  return date
    .toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(String(date.getFullYear()), `${date.getFullYear()},`);
};
