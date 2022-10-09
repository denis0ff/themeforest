import Breadcrumbs from '@components/Breadcrumbs';
import TeamBox from '@components/TeamBox';
import { Stack, Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { teamInfo } from '@constants';

export default () => (
  <>
    <SectionWrapper color="dark" variant="none">
      <SectionWrapper color="dark" variant="fenced" direction="column">
        <Breadcrumbs current="Our team" />
        <Stack direction="row" spacing={3}>
          <Typography variant="h2" component="h2" color="white">
            Our team
          </Typography>
          <Typography variant="subtitle1" component="p" color="white">
            Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque
            laudantium, totam remiga aperiam, eaque ipsa. Phasellus tristique eu nisl eu
            consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer
            enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.
            Fusce id commodo libero.
          </Typography>
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
    <TeamBox persons={teamInfo} />
  </>
);
