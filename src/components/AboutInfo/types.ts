import { AboutInfos } from '@mocks';

type Item = typeof AboutInfos[0];

export interface Props extends Item {
  isMirror: boolean;
}
