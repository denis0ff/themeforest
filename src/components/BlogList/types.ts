import { blogInfo } from '@mocks';

export type Props = {
  news: typeof blogInfo;
  listDirection: 'row' | 'column';
  newsVariant: 'home' | 'blog' | 'related' | 'popular';
};
