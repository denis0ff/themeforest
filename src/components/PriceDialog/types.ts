import { AlertHookSetterType, PriceInfo } from '@types';

export interface Props extends Omit<PriceInfo, 'durations'> {
  duration: string;
  open: boolean;
  handleClose: () => void;
  setErrorSubmit: AlertHookSetterType;
  setSuccessSubmit: AlertHookSetterType;
}
