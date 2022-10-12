import { Stack, Typography } from '@mui/material';
import { Banner, SectionWrapper } from '@theme';
import { AboutInfos, clientsInfo, contacts, testimonialsInfo } from '@constants';
import AboutInfo from '@components/AboutInfo';
import ClientStats from '@components/ClientStats';
import Testimonials from '@components/Testimonials';
import ContactForm from '@components/ContactForm';
import PageHeader2 from '@components/PageHeader2';
import Subscribe from '@components/Subscribe';
import FooterLinks from '@components/FooterLinks';

export default () => (
  <>
    <PageHeader2 title="About Us" />
    <SectionWrapper variant="none" bgColor="default" direction="column" pb={4} pt={4} spacing={4}>
      {AboutInfos.map((props, i) => (
        <AboutInfo key={props.title} {...props} isMirror={i % 2 !== 0} />
      ))}
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="column" pt={4} spacing={4}>
      <SectionWrapper variant="fenced" bgColor="grey" direction="column">
        <Typography variant="h2">Ensome in numbers</Typography>
        <ClientStats items={clientsInfo} isDiveded />
      </SectionWrapper>
    </SectionWrapper>
    <SectionWrapper variant="none" bgColor="grey" direction="column" pb={4} spacing={4}>
      <SectionWrapper variant="fenced" bgColor="grey" direction="column">
        <Typography variant="h2">Our customers</Typography>
        <Typography variant="body1" component="p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudan, totam rem aperiam.
        </Typography>
        <Banner image="clients" height="132"></Banner>
      </SectionWrapper>
    </SectionWrapper>
    <Testimonials title="What our customers say" items={testimonialsInfo} count={2} />
    <SectionWrapper variant="none" bgColor="grey" direction="row" pb={8} pt={4}>
      <SectionWrapper
        variant="fenced"
        bgColor="grey"
        direction="row"
        spacing={4}
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={2} maxWidth={540}>
          <Typography variant="h2">
            Left questions? Contacts us now for a free consultation and free trial!
          </Typography>
          <Typography variant="subtitle1">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Typography>
          {contacts.map(({ label, info }) => (
            <Stack key={info} direction="column">
              <Typography variant="body1">{label}</Typography>
              <Typography variant="body2">{info}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack maxWidth={445} minHeight={593} p={4} sx={{ background: 'white' }}>
          <Typography variant="h2">Contact us</Typography>
          <ContactForm variant="minimal" />
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
    <Subscribe />
    <FooterLinks />
  </>
);
