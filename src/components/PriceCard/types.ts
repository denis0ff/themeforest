import { AlertHookSetterType, PriceInfo } from '@types';

export interface Props extends PriceInfo {
  setErrorSubmit: AlertHookSetterType;
  setSuccessSubmit: AlertHookSetterType;
}
