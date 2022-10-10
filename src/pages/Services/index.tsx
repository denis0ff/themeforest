import Benefits from '@components/Benefits';
import { SectionWrapper } from '@theme';
import { servicesInfo } from '@constants';
import Clients from '@components/Clients';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';

export default () => (
  <>
    <PageHeader title="Data Analytics Services" subtitle="Services" />
    <SectionWrapper variant="fenced" bgColor="default" pb={8} pt={8}>
      <Benefits cards={servicesInfo} />
    </SectionWrapper>
    <Clients />
    <Footer />
  </>
);
