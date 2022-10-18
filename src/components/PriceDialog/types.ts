import { priceInfo } from '@constants';

type Options = typeof priceInfo[0];

export interface Props extends Omit<Options, 'durations'> {
  duration: string;
  open: boolean;
  handleClose: () => void;
}
