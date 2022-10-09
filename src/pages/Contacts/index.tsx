import Breadcrumbs from '@components/Breadcrumbs';
import { Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { contacts } from '@constants';
import ContactForm from '@components/ContactForm';
import MapBox from '@components/MapBox';
import FooterLinks from '@components/FooterLinks';

export default () => (
  <>
    <SectionWrapper variant="fenced" color="default" direction="column">
      <div>
        <Breadcrumbs current="Contacts" />
        <Typography variant="h2" component="h2">
          How can we <span>help you?</span>
        </Typography>
        <Stack direction="row" spacing={3}>
          {contacts.map(({ label, info }) => (
            <Stack key={info} direction="column" spacing={2}>
              <Typography variant="subtitle1">{label}</Typography>
              <Typography variant="subtitle2">{info}</Typography>
            </Stack>
          ))}
        </Stack>
      </div>
      <ContactForm variant="default" />
    </SectionWrapper>
    <MapBox />
    <FooterLinks />
  </>
);
