import Benefits from '@components/Benefits';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';
import ProsList from '@components/ProsList';
import Testimonials from '@components/Testimonials';
import { servicesInfo, solutionInfo, testimonialsInfo } from '@constants';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Banner, SectionWrapper } from '@theme';

export default () => (
  <>
    <PageHeader
      title="Data analytics solutions"
      subtitle="Solutions"
      description="Getting ready for your success, we provide truly outstanding IT solutions."
    />
    <SectionWrapper variant="fenced" bgColor="default" pb={8} pt={8}>
      <Benefits cards={solutionInfo} maxWidth="100%" />
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="row" spacing={4}>
      <Banner image="solutions" width="929" height="690" />
      <Stack spacing={4} maxWidth={540}>
        <Typography variant="h5">Why choose us?</Typography>
        <ProsList items={servicesInfo.slice(0, 3)} />
      </Stack>
    </SectionWrapper>
    <Testimonials title={'Testimonials'} items={testimonialsInfo} count={3} />
    <Footer />
  </>
);
