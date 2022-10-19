import { AlertHookSetterType } from './hooks';

export type PayPalFormProps = {
  value: string;
  handleClose: () => void;
  setErrorSubmit: AlertHookSetterType;
  setSuccessSubmit: AlertHookSetterType;
};
