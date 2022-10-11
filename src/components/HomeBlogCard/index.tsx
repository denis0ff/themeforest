import { Card, Typography, CardContent } from '@mui/material';
import { BlogImage } from './styled';
import { Props } from './types';

export default ({ image, title, subtitle, paragraph }: Props) => (
  <Card key={title} sx={{ maxWidth: 350 }}>
    <BlogImage image={`${process.env.PUBLIC_URL}/${image}.png`} />
    <CardContent>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Typography variant="subtitle2">{paragraph}</Typography>
    </CardContent>
  </Card>
);
