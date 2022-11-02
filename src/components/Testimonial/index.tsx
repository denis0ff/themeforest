import { getPageUrl, Paths } from '@constants';

import { Stack, Typography, CardContent } from '@mui/material';

import { CardImage, TestimonialCard } from './styled';
import { Props } from './types';

const Testimonial = ({ image, title, subtitle, paragraph }: Props) => (
  <TestimonialCard key={title} to={getPageUrl(Paths.TEAM)}>
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
  </TestimonialCard>
);

export default Testimonial;
