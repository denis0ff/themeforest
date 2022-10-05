import { Card, Stack, Typography, CardContent } from '@mui/material';
import { CardImage } from './styled';
import { Props } from './types';

export default ({ image, title, subtitle, paragraph }: Props) => (
  <Card key={title} sx={{ maxWidth: 350 }}>
    <Stack direction="row" spacing={0}>
      <CardImage image={`${process.env.PUBLIC_URL}/${image}.png`} />
      <Stack direction="column" spacing={0}>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Stack>
    </Stack>
    <CardContent>
      <Typography variant="subtitle2">{paragraph}</Typography>
    </CardContent>
  </Card>
);
