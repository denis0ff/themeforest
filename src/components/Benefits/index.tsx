import { Card, CardContent, Typography } from '@mui/material';
import { CardImage, GridBox } from './styled';
import { Props } from './types';

export default ({ cards }: { cards: Props }) => (
  <GridBox container rowSpacing={4} columnSpacing={4} gap={4}>
    {cards.map(({ image, title, paragraph }) => (
      <Card key={image} sx={{ maxWidth: 255 }}>
        <CardImage image={`${process.env.PUBLIC_URL}/${image}.svg`} />
        <CardContent>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="subtitle2">{paragraph}</Typography>
        </CardContent>
      </Card>
    ))}
  </GridBox>
);
