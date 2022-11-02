import { servicesInfo, solutionInfo, testimonialsInfo } from '@mocks';

import { Banner, SectionWrapper } from '@theme';

import { Box, Typography } from '@mui/material';

import { Stack } from '@mui/system';

import Benefits from '@components/Benefits';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';
import ProsList from '@components/ProsList';
import Testimonials from '@components/Testimonials';

const SolutionsPage = () => {
  const prosItems = servicesInfo.slice(0, 3);
  return (
    <>
      <PageHeader
        isDetailed
        title="Data analytics solutions"
        subtitle="Solutions"
        description="Getting ready for your success, we provide truly outstanding IT solutions."
      />
      <SectionWrapper variant="fenced" bgColor="default" pb={8} pt={8}>
        <Benefits cards={solutionInfo} maxWidth="100%" />
      </SectionWrapper>
      <SectionWrapper variant="none" bgColor="grey" direction="row" spacing={4}>
        <Banner image="solutions" width="929" height="690" />
        <Box width="100%">
          <Stack spacing={4} maxWidth={540}>
            <Typography variant="h2">Why choose us?</Typography>
            <ProsList prosItems={prosItems} />
          </Stack>
        </Box>
      </SectionWrapper>
      <Testimonials title={'Testimonials'} items={testimonialsInfo} count={3} />
      <Footer />
    </>
  );
};

export default SolutionsPage;
