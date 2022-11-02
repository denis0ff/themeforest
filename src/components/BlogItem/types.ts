import { blogInfo } from '@mocks';

type Item = typeof blogInfo[0];

export interface Props extends Item {
  variant: 'home' | 'blog' | 'related' | 'popular' | 'search-bar';
}
