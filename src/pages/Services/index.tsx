import { servicesInfo } from '@mocks';

import { SectionWrapper } from '@theme';

import Benefits from '@components/Benefits';
import Clients from '@components/Clients';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';

const ServicesPage = () => (
  <>
    <PageHeader isDetailed title="Data Analytics Services" subtitle="Services" />
    <SectionWrapper variant="fenced" bgColor="default" pb={8} pt={8}>
      <Benefits cards={servicesInfo} maxWidth="100%" />
    </SectionWrapper>
    <Clients />
    <Footer />
  </>
);

export default ServicesPage;
