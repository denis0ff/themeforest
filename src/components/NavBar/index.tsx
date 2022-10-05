import { Stack } from '@mui/material';
import { Link } from './styled';
import { Props } from './types';

export default ({ direction = 'row', routes }: Props) => {
  return (
    <nav>
      <Stack direction={direction} spacing={{ xs: 1, sm: 2, md: 4 }}>
        {routes.map(({ path, label }) => (
          <Link key={path + label} to={path}>
            {label}
          </Link>
        ))}
      </Stack>
    </nav>
  );
};
