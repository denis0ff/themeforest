import Breadcrumbs from '@components/Breadcrumbs';
import { Typography } from '@mui/material';
import { SectionWrapper } from '@theme';
import { Props } from './types';

export default ({
  title,
  subtitle,
  description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
}: Props) => (
  <SectionWrapper variant="fenced" color="default" direction="column">
    <Breadcrumbs current={subtitle} />
    <Typography variant="body1" component="span">
      {subtitle}
    </Typography>
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
    <Typography variant="subtitle1" component="p">
      {description}
    </Typography>
  </SectionWrapper>
);
