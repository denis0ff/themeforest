import { Divider, Stack, Typography } from '@mui/material';

import { Props } from './types';

const ClientStats = ({ clients, isDiveded }: Props) => (
  <Stack
    direction="row"
    spacing={2}
    divider={isDiveded && <Divider orientation="vertical" flexItem />}
  >
    {clients.map(({ label, info }) => (
      <Stack direction="column" key={label + info} alignItems="center" spacing={1}>
        <Typography variant="h2" color="primary">
          {info}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          {label}
        </Typography>
      </Stack>
    ))}
  </Stack>
);

export default ClientStats;
