import { Button, Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';

export default () => {
  return (
    <SectionWrapper variant="none" color="grey">
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h5" component="h5">
          Do you need help?
        </Typography>
        <Typography variant="subtitle1">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </Typography>
        <Button variant="contained">Contact Us</Button>
      </Stack>
    </SectionWrapper>
  );
};
