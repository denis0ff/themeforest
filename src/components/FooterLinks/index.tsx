import { Stack, Typography } from '@mui/material';
import { Logo, SectionWrapper, Social } from '@theme';
import { additionalRoutes, contacts, routes, socials } from '@constants';
import NavBar from '@components/NavBar';

export default () => {
  return (
    <SectionWrapper variant="none" bgColor="dark">
      <SectionWrapper
        variant="fenced"
        bgColor="dark"
        isBordered
        direction="row"
        spacing={5}
        pt={5}
        pb={5}
      >
        <Stack direction="column" spacing={2} alignSelf="flex-start">
          <Logo isWhite />
          <Typography variant="subtitle2" color="white">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socials.map(({ image, href }) => (
              <Social href={href} key={href} path={image} target="_blank" />
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
          {contacts.map(({ info }) => (
            <Typography key={info} variant="subtitle2" color="white">
              {info}
            </Typography>
          ))}
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
  );
};
