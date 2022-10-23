import { Typography } from '@mui/material';
import { Banner } from '@theme';
import { CardInfo } from './styled';
import { Props } from './types';

export default ({ data: { image, title, subtitle } }: Props) => (
  <Banner width="350" height="500" image={image}>
    <CardInfo>
      <Typography variant="subtitle1" color="white">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="white">
        {subtitle}
      </Typography>
    </CardInfo>
  </Banner>
);
