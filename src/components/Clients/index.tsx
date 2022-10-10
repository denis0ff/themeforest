import { Typography, Stack } from '@mui/material';
import { clientsInfo } from '@constants';
import { Banner, SectionWrapper } from '@theme';
import ClientStats from '@components/ClientStats';

export default () => (
  <SectionWrapper variant="fenced" bgColor="default" direction="column" mt={8} mb={8}>
    <Typography variant="h4" component="h4">
      We provide services that guarantee your success
    </Typography>
    <Stack direction="row" spacing={1}>
      <ClientStats items={clientsInfo.slice(0, 3)} />
      <Typography variant="subtitle1" component="p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
        quam, non mollis quam finibus nec.
      </Typography>
    </Stack>
    <Banner image="clients" height="132"></Banner>
  </SectionWrapper>
);
