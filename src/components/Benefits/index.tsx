import { CardContent, Link, Typography } from '@mui/material';

import { BenefitCard, CardImage, GridBox } from './styled';
import { Props } from './types';

const Benefits = ({ cards, maxWidth }: Props) => {
  return (
    <GridBox
      rowSpacing={4}
      columnSpacing={4}
      gap={4}
      gridTemplateColumns="repeat(2, 1fr)"
      minWidth={maxWidth}
    >
      {cards.map(({ image, title, subtitle, link }) => (
        <BenefitCard key={image}>
          <CardImage image={`${process.env.PUBLIC_URL}/assets/${image}.svg`} />
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
            {link && <Link>{link}</Link>}
          </CardContent>
        </BenefitCard>
      ))}
    </GridBox>
  );
};

export default Benefits;
