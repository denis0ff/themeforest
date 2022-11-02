import { useCallback, useEffect, useReducer, useRef } from 'react';

import {
  AlertHookInitialValue,
  AlertHookReturnHookType,
  AlertHookReducerType,
  AlertHookSetterType,
} from '@types';

const initialValue: AlertHookInitialValue = { description: '' };

export const useAlertMessage = (timeout?: number): AlertHookReturnHookType => {
  const [alert, setAlert] = useReducer<AlertHookReducerType>(
    (_, action) => ({ ...action }),
    initialValue
  );
  const timerId = useRef<NodeJS.Timeout>();

  const setSuccess = useCallback<AlertHookSetterType>(
    (payload) => setAlert({ severity: 'success', ...payload }),
    []
  );
  const setError = useCallback<AlertHookSetterType>(
    (payload) => setAlert({ severity: 'error', ...payload }),
    []
  );

  useEffect(() => {
    if (timeout && alert.description) {
      timerId.current = setTimeout(() => setAlert(initialValue), timeout);
    }
    return () => clearTimeout(timerId.current);
  });

  return [alert, setSuccess, setError];
};
