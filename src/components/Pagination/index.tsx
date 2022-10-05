import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Stack, Button } from '@mui/material';
import { Props } from './types';

export default ({
  props: [handleBackward, handleForward, isActiveBackward, isActiveForward],
}: Props) => {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" onClick={handleBackward} disabled={isActiveBackward}>
        <ArrowLeft />
      </Button>
      <Button variant="contained" onClick={handleForward} disabled={isActiveForward}>
        <ArrowRight />
      </Button>
    </Stack>
  );
};
