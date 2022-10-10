import Breadcrumbs from '@components/Breadcrumbs';
import { Stack, Typography } from '@mui/material';
import { Banner, SectionWrapper } from '@theme';
import { AboutInfos, clientsInfo, contacts, testimonialsInfo } from '@constants';
import AboutInfo from '@components/AboutInfo';
import ClientStats from '@components/ClientStats';
import Testimonials from '@components/Testimonials';
import Footer from '@components/Footer';
import ContactForm from '@components/ContactForm';

export default () => (
  <>
    <SectionWrapper variant="none" bgColor="grey" direction="column" pb={8} pt={8} spacing={4}>
      <Typography variant="h2" component="h2">
        About Us
      </Typography>
      <Breadcrumbs current="About Us" />
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="default" direction="column" pb={8} pt={8} spacing={4}>
      {AboutInfos.map((props, i) => (
        <AboutInfo key={props.title} {...props} isMirror={i % 2 !== 0} />
      ))}
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="column" pb={8} pt={8} spacing={4}>
      <SectionWrapper variant="fenced" bgColor="grey" direction="column">
        <Typography variant="h3" component="h3">
          Ensome in numbers
        </Typography>
        <ClientStats items={clientsInfo} isDiveded />
      </SectionWrapper>
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="column" pb={8} pt={8} spacing={4}>
      <SectionWrapper variant="fenced" bgColor="grey" direction="column">
        <Typography variant="h3" component="h3">
          Our customers
        </Typography>
        <Typography variant="subtitle1" component="p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudan, totam rem aperiam.
        </Typography>
        <Banner image="clients" height="132"></Banner>
      </SectionWrapper>
    </SectionWrapper>
    <Testimonials title="What our customers say" items={testimonialsInfo} count={2} />
    <SectionWrapper variant="fenced" bgColor="default" direction="row" pb={8} pt={8} spacing={4}>
      <Stack direction="column" spacing={3}>
        <Typography variant="h5" component="h5">
          Left questions? Contacts us now for a free consultation and free trial!
        </Typography>
        <Typography variant="subtitle1">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </Typography>
        {contacts.map(({ label, info }) => (
          <Stack key={info} direction="column" spacing={2}>
            <Typography variant="subtitle1">{label}</Typography>
            <Typography variant="subtitle2">{info}</Typography>
          </Stack>
        ))}
      </Stack>
      <ContactForm variant="minimal" />
    </SectionWrapper>
    <Footer />
  </>
);
