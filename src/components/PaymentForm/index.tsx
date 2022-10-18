import { Props } from './types';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PayPalButtons from '@components/PayPalButtons';

export default ({ value, handleClose }: Props) => {
  return (
    <PayPalScriptProvider
      deferLoading
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID as string,
        components: 'buttons',
      }}
    >
      <PayPalButtons value={value} handleClose={handleClose} />
    </PayPalScriptProvider>
  );
};
