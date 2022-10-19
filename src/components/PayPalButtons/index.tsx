import { useEffect, useMemo, useState } from 'react';
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { Props } from './types';
import Loader from '@components/Loader';

export default ({ value, handleClose, setErrorSubmit, setSuccessSubmit }: Props) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: { ...options },
    });
  }, []);

  const isLoading = useMemo(() => isInitialized || isPending, [isInitialized, isPending]);

  const payPalConfig: PayPalButtonsComponentProps = {
    forceReRender: [value],
    disabled: isLoading,
    style: { color: 'blue', layout: 'horizontal' },
    createOrder: (_, actions) => actions.order.create({ purchase_units: [{ amount: { value } }] }),
    onApprove: (_, actions) =>
      actions.order
        ? actions.order
            .capture()
            .then(() => {
              setSuccessSubmit({ title: 'Success', description: 'Payment completed!' });
            })
            .catch(() => {
              setErrorSubmit({
                title: 'Error',
                description: 'Something went wrong. Please try to pay later',
              });
            })
            .finally(() => handleClose())
        : Promise.resolve().then(() => {
            throw new Error('Error with Paypal API');
          }),
    onInit: () => setIsInitialized(false),
  };

  return (
    <>
      {isLoading && <Loader />}
      <PayPalButtons {...payPalConfig} />
    </>
  );
};
