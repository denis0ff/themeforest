import { Card, CardContent, Link, Typography } from '@mui/material';
import { CardImage, GridBox } from './styled';
import { Props } from './types';

export default ({ cards, maxWidth }: Props) => (
  <GridBox
    rowSpacing={4}
    columnSpacing={4}
    gap={4}
    gridTemplateColumns="repeat(2, 1fr)"
    minWidth={540}
  >
    {cards.map(({ image, title, subtitle, link }) => (
      <Card key={image} sx={{ maxWidth: maxWidth || 255 }}>
        <CardImage image={`${process.env.PUBLIC_URL}/${image}.svg`} />
        <CardContent>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
          {link && <Link>{link}</Link>}
        </CardContent>
      </Card>
    ))}
  </GridBox>
);
