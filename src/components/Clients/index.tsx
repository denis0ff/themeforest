import { clientsInfo } from '@mocks';

import { Banner, SectionWrapper } from '@theme';

import { Typography, Stack } from '@mui/material';

import ClientStats from '@components/ClientStats';

const Clients = () => {
  const clientsData = clientsInfo.slice(0, 3);
  return (
    <SectionWrapper variant="fenced" bgColor="default" direction="column" mt={8} mb={8} spacing={4}>
      <Typography variant="h2">We provide services that guarantee your success</Typography>
      <Stack direction="row" spacing={4}>
        <ClientStats clients={clientsData} />
        <Typography variant="body1" component="p" width={540}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
          quam, non mollis quam finibus nec.
        </Typography>
      </Stack>
      <Banner image="clients" height="132"></Banner>
    </SectionWrapper>
  );
};

export default Clients;
