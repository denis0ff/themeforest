import { Divider, Stack, Typography } from '@mui/material';
import { Props } from './types';

export default ({ items, isDiveded }: Props) => (
  <Stack
    direction="row"
    spacing={2}
    divider={isDiveded && <Divider orientation="vertical" flexItem />}
  >
    {items.map(({ label, info }) => (
      <Stack direction="column" key={label + info} alignItems="center" spacing={1}>
        <Typography variant="h4" component="h4">
          {info}
        </Typography>
        <Typography variant="subtitle2" component="p" textAlign="center">
          {label}
        </Typography>
      </Stack>
    ))}
  </Stack>
);
