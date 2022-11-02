import { useState, useCallback, useMemo } from 'react';

import { parseDuration } from '@utils';

import { Typography, Stack, Button } from '@mui/material';

import PriceDialog from '@components/PriceDialog';
import ProsList from '@components/ProsList';
import ToggleGroup from '@components/ToggleGroup';

import { CardContainer } from './styled';
import { Props } from './types';

const PriceCard = (props: Props) => {
  const { title, price, durations, possibilities } = props;
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

  const prosItems = useMemo(() => possibilities.map((title) => ({ title })), [possibilities]);

  return (
    <CardContainer>
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
      <ProsList prosItems={prosItems} />
      <PriceDialog
        {...props}
        open={open}
        handleClose={handleClose}
        duration={parseDuration(pickedDuration)}
      />
    </CardContainer>
  );
};

export default PriceCard;
