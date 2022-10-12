import Breadcrumbs from '@components/Breadcrumbs';
import TeamBox from '@components/TeamBox';
import { Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { MOCK_MANY_DEVELOPERS } from '@constants';
import Subscribe from '@components/Subscribe';
import FooterLinks from '@components/FooterLinks';

export default () => (
  <>
    <SectionWrapper bgColor="dark" variant="none" pt={4} pb={8}>
      <SectionWrapper bgColor="dark" variant="fenced" direction="column" spacing={4}>
        <SectionWrapper variant="none" bgColor="dark" alignItems="flex-start">
          <Breadcrumbs current="Our team" color="white" />
        </SectionWrapper>
        <Stack
          direction="row"
          spacing={3}
          pt={4}
          pb={4}
          width="100%"
          justifyContent="space-between"
        >
          <Typography variant="h1" color="white">
            Our team
          </Typography>
          <Typography variant="subtitle1" component="p" maxWidth={540}>
            Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
            laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
            consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer
            enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.
            Fusce id commodo libero.
          </Typography>
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
    <TeamBox persons={MOCK_MANY_DEVELOPERS} />
    <Subscribe />
    <FooterLinks />
  </>
);
