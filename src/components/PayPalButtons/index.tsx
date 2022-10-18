import { useEffect, useMemo, useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Props } from './types';
import Loader from '@components/Loader';

export default ({ value, handleClose }: Props) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: { ...options },
    });
  }, []);

  const isLoading = useMemo(() => isInitialized || isPending, [isInitialized, isPending]);

  return (
    <>
      {isLoading && <Loader />}
      <PayPalButtons
        forceReRender={[value]}
        disabled={isLoading}
        style={{ color: 'blue', layout: 'horizontal' }}
        createOrder={(data, actions) =>
          actions.order.create({ purchase_units: [{ amount: { value } }] })
        }
        onApprove={(data, actions) =>
          actions.order ? actions.order.capture().then(() => handleClose()) : Promise.resolve()
        }
        onInit={() => setIsInitialized(false)}
      />
    </>
  );
};
