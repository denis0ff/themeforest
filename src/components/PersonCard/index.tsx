import { Typography } from '@mui/material';
import { CardContainer, CardInfo } from './styled';
import { Props } from './types';

export default ({ title, image, subtitle, isMargin }: Props) => (
  <CardContainer width="350" height="500" image={image} isMargin={isMargin}>
    <CardInfo>
      <Typography variant="subtitle1" color="white">
        {title}
      </Typography>
      <Typography variant="subtitle2" color="white">
        {subtitle}
      </Typography>
    </CardInfo>
  </CardContainer>
);
