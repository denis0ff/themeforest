import { CenteredBox } from './styled';
import { Divider, Stack, Typography } from '@mui/material';
import { Props } from './types';

export default ({ items, isDiveded }: Props) => (
  <Stack
    direction="row"
    spacing={1}
    divider={isDiveded && <Divider orientation="vertical" flexItem />}
  >
    {items.map(({ label, info }) => (
      <CenteredBox key={label + info}>
        <Typography variant="h4" component="h4">
          {info}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {label}
        </Typography>
      </CenteredBox>
    ))}
  </Stack>
);
