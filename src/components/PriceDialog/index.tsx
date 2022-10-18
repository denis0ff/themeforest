import PaymentForm from '@components/PaymentForm';
import ProsList from '@components/ProsList';
import { Dialog, Stack, Typography } from '@mui/material';
import { parsePriceValue } from '@utils';
import { Props } from './types';

export default ({ title, price, possibilities, duration, open, handleClose }: Props) => (
  <Dialog open={open} onClose={handleClose}>
    <Stack spacing={2} p={4}>
      <Typography variant="h5">Payment</Typography>
      <Typography variant="h6">
        Plan:{' '}
        <Typography variant="h6" component="span" color="primary">
          {title}
        </Typography>
      </Typography>
      <Typography variant="h6">
        Price:{' '}
        <Typography variant="h6" component="span" color="primary">
          {price}
        </Typography>
      </Typography>
      <Typography variant="h6">
        Duration:{' '}
        <Typography variant="h6" component="span" color="primary">
          {duration}
        </Typography>
      </Typography>
      <ProsList items={possibilities.map((title) => ({ title: title }))} />
      <PaymentForm value={parsePriceValue(price)} handleClose={handleClose} />
    </Stack>
  </Dialog>
);
