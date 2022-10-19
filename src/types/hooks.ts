import { AlertColor } from '@mui/material';

export type AlertHookStateValue = undefined | AlertColor;
export type AlertHookInitialValue = {
  severity?: AlertHookStateValue;
  title?: string;
  description: string;
};
export type AlertHookReducerType = React.Reducer<AlertHookInitialValue, AlertHookInitialValue>;
export type AlertHookSetterType = (payload: Omit<AlertHookInitialValue, 'severity'>) => void;
export type AlertHookReturnHookType = [
  AlertHookInitialValue,
  AlertHookSetterType,
  AlertHookSetterType
];
