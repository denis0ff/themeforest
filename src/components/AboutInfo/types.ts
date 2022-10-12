import { AboutInfos } from '@constants';

type Item = typeof AboutInfos[0];

export interface Props extends Item {
  isMirror: boolean;
}
