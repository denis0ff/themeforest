import { Card, Chip, Stack, Typography } from '@mui/material';
import { priceInfo, rateToggles } from '@constants';

import ToggleGroup from '@components/ToggleGroup';
import DoneIcon from '@mui/icons-material/Done';

export default () => {
  return (
    <>
      <Typography variant="h5" component="h5">
        Our pricing
      </Typography>
      <Stack direction="row" spacing={1}>
        {priceInfo.map(({ title, price, possibilities }) => (
          <Card key={title} sx={{ maxWidth: 255 }}>
            <Typography variant="h6" component="h6">
              {title}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1">{price}</Typography>
              <ToggleGroup toggles={rateToggles} />
            </Stack>
            <Stack direction="column" spacing={1}>
              {possibilities.map((item) => (
                <Chip key={item} icon={<DoneIcon />} label={item} />
              ))}
            </Stack>
          </Card>
        ))}
      </Stack>
    </>
  );
};
