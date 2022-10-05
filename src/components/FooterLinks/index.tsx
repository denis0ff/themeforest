import { Stack, Typography } from '@mui/material';
import { Logo, SectionWrapper, Social } from '@theme';
import { additionalRoutes, contacts, routes, socials } from '@constants';
import NavBar from '@components/NavBar';

export default () => {
  return (
    <SectionWrapper variant="none" color="dark">
      <SectionWrapper variant="fenced" color="dark" isBordered>
        <Stack direction="column" spacing={2}>
          <Logo isWhite />
          <Typography variant="subtitle2" color="white">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socials.map((social) => (
              <Social key={social} path={social} />
            ))}
          </Stack>
        </Stack>
        <Stack direction="column" spacing={2} color="white" alignSelf="baseline">
          <Typography variant="h6" color="white">
            Quick Link
          </Typography>
          <NavBar routes={routes} direction="column" />
        </Stack>
        <Stack direction="column" spacing={2} color="white" alignSelf="baseline">
          <Typography variant="h6" color="white">
            Service
          </Typography>
          <NavBar routes={additionalRoutes} direction="column" />
        </Stack>
        <Stack direction="column" spacing={2} color="white" alignSelf="baseline">
          <Typography variant="h6" color="white">
            Contact info
          </Typography>
          {contacts.map((contact) => (
            <Typography key={contact} variant="subtitle2" color="white">
              {contact}
            </Typography>
          ))}
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
  );
};
