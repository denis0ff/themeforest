import { Card, Stack, Typography, CardContent } from '@mui/material';
import { CardImage } from './styled';
import { Props } from './types';

export default ({ image, title, subtitle, paragraph }: Props) => (
  <Card key={title} sx={{ maxWidth: 350 }}>
    <Stack direction="row" spacing={0}>
      <CardImage image={`${process.env.PUBLIC_URL}/assets/${image}.png`} />
      <Stack direction="column" spacing={0}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </Stack>
    </Stack>
    <CardContent>
      <Typography variant="subtitle1">{paragraph}</Typography>
    </CardContent>
  </Card>
);
