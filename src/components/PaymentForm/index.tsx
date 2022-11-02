import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import PayPalButtons from '@components/PayPalButtons';

import { Props } from './types';

const PaymentForm = ({ value, handleClose, setErrorSubmit, setSuccessSubmit }: Props) => {
  return (
    <PayPalScriptProvider
      deferLoading
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
        components: 'buttons',
      }}
    >
      <PayPalButtons
        value={value}
        handleClose={handleClose}
        setErrorSubmit={setErrorSubmit}
        setSuccessSubmit={setSuccessSubmit}
      />
    </PayPalScriptProvider>
  );
};

export default PaymentForm;
