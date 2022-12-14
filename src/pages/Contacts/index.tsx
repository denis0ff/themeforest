import { contacts } from '@constants';

import { SectionWrapper } from '@theme';

import { Stack, Typography } from '@mui/material';

import Breadcrumbs from '@components/Breadcrumbs';
import ContactForm from '@components/ContactForm';
import FooterLinks from '@components/FooterLinks';
import MapBox from '@components/MapBox';

const ContactsPage = () => (
  <>
    <SectionWrapper variant="fenced" bgColor="default" direction="row" spacing={4}>
      <div>
        <Breadcrumbs current="Contacts" />
        <Typography variant="h1">
          How can we{' '}
          <Typography variant="h1" component="span" color="primary">
            help you?
          </Typography>
        </Typography>
      </div>
      <Stack maxWidth={540} p={4}>
        <ContactForm variant="default" />
      </Stack>
    </SectionWrapper>
    <SectionWrapper
      variant="fenced"
      bgColor="default"
      direction="row"
      spacing={4}
      pb={4}
      justifyContent="flex-start"
    >
      {contacts.map(({ label, info }) => (
        <Stack key={info} direction="column" spacing={2}>
          <Typography variant="body1">{label}</Typography>
          <Typography variant="body2">{info}</Typography>
        </Stack>
      ))}
    </SectionWrapper>
    <MapBox />
    <FooterLinks />
  </>
);

export default ContactsPage;
