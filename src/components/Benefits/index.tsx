import { Card, CardContent, Link, Typography } from '@mui/material';
import { CardImage, GridBox } from './styled';
import { Props } from './types';

export default ({ cards, maxWidth }: Props) => (
  <GridBox
    rowSpacing={4}
    columnSpacing={4}
    gap={4}
    gridTemplateColumns="repeat(2, 1fr)"
    minWidth={maxWidth}
  >
    {cards.map(({ image, title, subtitle, link }) => (
      <Card key={image}>
        <CardImage image={`${process.env.PUBLIC_URL}/assets/${image}.svg`} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
          {link && <Link>{link}</Link>}
        </CardContent>
      </Card>
    ))}
  </GridBox>
);
