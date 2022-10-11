import { Stack, Typography } from '@mui/material';
import { Banner } from '@theme';
import { NavLink } from 'react-router-dom';
import { Props } from './types';

export default ({ image, title, paragraph, tags }: Props) => (
  <NavLink to="/blog/:id">
    <Stack direction="row" alignItems="center" spacing={3}>
      <Banner image={image} width="350" height="200" />
      <div>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2">{paragraph}</Typography>
        <Stack direction="row" spacing={1} mt={4}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Stack>
      </div>
    </Stack>
  </NavLink>
);
