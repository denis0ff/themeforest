import { NavLink } from 'react-router-dom';

import { getPageUrl, Paths } from '@constants';
import { SectionWrapper } from '@theme';

import { Button, Stack, Typography } from '@mui/material';

const NeedHelp = () => {
  return (
    <SectionWrapper variant="none" bgColor="grey" pt={8} pb={8} spacing={4}>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h2">Do you need help?</Typography>
        <Typography variant="body1" maxWidth={540} textAlign="center">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi.
        </Typography>
        <NavLink to={getPageUrl(Paths.CONTACTS)}>
          <Button variant="contained">Contact Us</Button>
        </NavLink>
      </Stack>
    </SectionWrapper>
  );
};

export default NeedHelp;
