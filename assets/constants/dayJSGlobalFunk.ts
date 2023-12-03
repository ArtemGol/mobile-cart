import dayjs from 'dayjs';

export const dayJSGlobalFunk = (date: string, locale: string) =>
  dayjs(date).locale(locale);
