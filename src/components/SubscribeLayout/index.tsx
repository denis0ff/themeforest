import { SectionWrapper } from '@theme';

import { Stack, Typography } from '@mui/material';

import SubscribeForm from '@components/SubscribeForm';

const SubscribeLayout = () => {
  return (
    <SectionWrapper variant="none" bgColor="dark" isBordered pt={6} pb={6}>
      <SectionWrapper variant="fenced" bgColor="dark" spacing={8} direction="row">
        <Stack direction="column" spacing={2}>
          <Typography variant="h2" color="white">
            Subscribe to our newsletter
          </Typography>
          <Typography variant="subtitle1" component="p" color="white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
            quam, non mollis quam finibus nec.
          </Typography>
        </Stack>
        <SubscribeForm />
      </SectionWrapper>
    </SectionWrapper>
  );
};

export default SubscribeLayout;
