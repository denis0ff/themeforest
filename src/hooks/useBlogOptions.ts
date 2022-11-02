import { getPostsTitle } from '@utils';

import { usePortionedPagination } from './usePortionedPagination';

export const useBlogOptions = <T>(news: Array<T>, variant: string) => {
  const portionSize = variant === 'home' || variant === 'blog' ? 9 : 3;
  const [portion, setPage] = usePortionedPagination(news, portionSize);
  const isButton = variant === 'blog' && news.length !== portion.length;
  const title = getPostsTitle(variant);
  const sectionVariant: 'none' | 'fenced' = variant === 'popular' ? 'none' : 'fenced';

  return { portion, isButton, title, sectionVariant, setPage };
};
