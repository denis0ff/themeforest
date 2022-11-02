import { Stack } from '@mui/material';

import { Link } from './styled';
import { Props } from './types';

const NavBar = ({ direction = 'row', routes }: Props) => {
  return (
    <Stack direction={direction} spacing={2}>
      {routes.map(
        ({ path, label, isNav }) =>
          isNav && (
            <Link key={path + label} to={path}>
              {label}
            </Link>
          )
      )}
    </Stack>
  );
};

export default NavBar;
