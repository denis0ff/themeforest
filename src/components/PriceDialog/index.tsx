import { useMemo } from 'react';

import { parsePriceValue } from '@utils';

import { Dialog, Stack, Typography } from '@mui/material';

import PaymentForm from '@components/PaymentForm';
import ProsList from '@components/ProsList';

import { Props } from './types';

const PriceDialog = ({
  title,
  price,
  possibilities,
  duration,
  open,
  handleClose,
  setErrorSubmit,
  setSuccessSubmit,
}: Props) => {
  const prosItems = useMemo(() => possibilities.map((title) => ({ title })), [possibilities]);
  return (
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
        <ProsList prosItems={prosItems} />
        <PaymentForm
          value={parsePriceValue(price)}
          handleClose={handleClose}
          setErrorSubmit={setErrorSubmit}
          setSuccessSubmit={setSuccessSubmit}
        />
      </Stack>
    </Dialog>
  );
};

export default PriceDialog;
