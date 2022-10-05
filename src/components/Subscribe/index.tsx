import { Button, InputBase, Paper, Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';

export default () => {
  return (
    <SectionWrapper variant="none" color="dark" isBordered>
      <SectionWrapper variant="fenced" color="dark">
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" component="h5" color="white">
            Subscribe to our newsletter
          </Typography>
          <Typography variant="subtitle1" component="p" color="white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
            quam, non mollis quam finibus nec.
          </Typography>
        </Stack>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Your email"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Button aria-label="search">Send</Button>
        </Paper>
      </SectionWrapper>
    </SectionWrapper>
  );
};
