import PriceDialog from '@components/PriceDialog';
import ProsList from '@components/ProsList';
import ToggleGroup from '@components/ToggleGroup';
import { Typography, Stack, Button } from '@mui/material';
import { useState, useCallback } from 'react';
import { parseDuration } from '@utils';
import { PriceCard } from './styled';
import { Props } from './types';

export default ({ title, price, durations, possibilities }: Props) => {
  const [open, setOpen] = useState(false);
  const [pickedDuration, setPickedDuration] = useState(durations[0]);

  const handleToggle = useCallback((newPicked: string) => {
    setPickedDuration(newPicked);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <PriceCard>
      <Typography variant="h6">{title}</Typography>
      <Stack
        direction="row"
        spacing={1}
        p={1}
        pb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">{price}</Typography>
        <ToggleGroup toggles={durations} picked={pickedDuration} setPicked={handleToggle} />
      </Stack>
      <Button variant="contained" onClick={handleOpen}>
        Choose plan
      </Button>
      <ProsList items={possibilities.map((title) => ({ title: title }))} />
      <PriceDialog
        open={open}
        handleClose={handleClose}
        title={title}
        price={price}
        possibilities={possibilities}
        duration={parseDuration(pickedDuration)}
      />
    </PriceCard>
  );
};
