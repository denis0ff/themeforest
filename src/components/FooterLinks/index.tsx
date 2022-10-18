import { Stack, Typography } from '@mui/material';
import { Logo, SectionWrapper, Social } from '@theme';
import { additionalRoutes, contacts, routes, socials } from '@constants';
import NavBar from '@components/NavBar';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <SectionWrapper variant="none" bgColor="dark">
      <SectionWrapper
        variant="fenced"
        bgColor="dark"
        isBordered
        direction="row"
        spacing={4}
        pt={4}
        pb={4}
        justifyContent="space-between"
      >
        <Stack direction="column" spacing={2} alignSelf="flex-start" maxWidth={285}>
          <NavLink to="/">
            <Logo image="white_logo" />
          </NavLink>
          <Typography variant="subtitle1" color="white">
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
            <Typography key={info} variant="subtitle1" color="secondary">
              {info}
            </Typography>
          ))}
        </Stack>
      </SectionWrapper>
    </SectionWrapper>
  );
};