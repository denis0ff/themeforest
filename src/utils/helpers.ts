import { blogInfo } from '@constants';
import { FormFieldData, InitialFormValues } from '@types';

export const sliceTextWithDots = (p: string, length = 165) =>
  `${p.slice(0, length)}${length <= p.length ? '...' : ''}`;

const sortByRate = (a: { rate: string }, b: { rate: string }) => +b.rate - +a.rate;

export const getPopularNews = (news: typeof blogInfo, filterId: string) =>
  news
    .filter(({ id }) => id !== filterId)
    .sort(sortByRate)
    .slice(0, 3);

export const getRelatedNews = (news: typeof blogInfo, filterId: string, filterTags: string[]) =>
  news
    .filter(({ tags, id }) => tags.some((tag) => filterTags.includes(tag)) && id !== filterId)
    .sort(sortByRate)
    .slice(0, 3);

export const getImageSize = (variant: string) => {
  switch (variant) {
    case 'popular':
      return { width: '190', height: '114' };
    case 'related':
      return { width: '215', height: '171' };
    case 'search-bar':
      return { width: '100', height: '65' };
    default:
      return { width: '350', height: '200' };
  }
};

export const getPostsTitle = (variant: string) => {
  switch (variant) {
    case 'popular':
      return 'Popular posts';
    case 'related':
      return 'Related posts';
    default:
      return null;
  }
};

export const parseDuration = (value: string) => {
  switch (value) {
    case 'Mo':
      return '1 month';
    case 'Yr':
      return '1 year';
    default:
      return '';
  }
};

export const reduceFieldsName = (array: FormFieldData[]) =>
  array.reduce<InitialFormValues>((acc, { name }) => {
    acc[name] = '';
    return acc;
  }, {});

export const parsePriceValue = (value: string) => {
  switch (value) {
    case 'Custom':
      return '0.01';
    case '$00':
      return '0.01';
    default:
      return Number(value.replace(/[^0-9]/, '')).toString();
  }
};

export const getNewsOptions = (variant: string) => {
  const direction: 'column' | 'row' = variant === 'home' ? 'column' : 'row';
  const isParagraph = variant === 'home' || variant === 'related' || variant !== 'search-bar';
  const isTag = variant === 'blog';
  const isLink = variant === 'home' || variant === 'popular';
  const isSubtitle = variant !== 'search-bar';
  const titleVariant: 'body1' | 'h4' = variant === 'search-bar' ? 'body1' : 'h4';
  return { direction, isLink, isParagraph, isTag, isSubtitle, titleVariant };
};

export const getFakeItems = <T>(start = 0, end = 9, array: Array<T>) => array.slice(start, end);

export const getFakeItemsPromise = <T>(start: number, end: number, array: Array<T>) =>
  Promise.resolve(getFakeItems(start, end, array));
