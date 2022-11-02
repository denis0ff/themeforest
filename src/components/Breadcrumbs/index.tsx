import { NavLink } from 'react-router-dom';

import { Paths } from '@constants';

import { Link } from '@mui/material';
import BreadcrumbsMUI from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import { Props } from './types';

const Breadcrumbs = ({ current, color }: Props) => {
  return (
    <BreadcrumbsMUI aria-label="breadcrumb" separator="|">
      <NavLink to={Paths.BASE}>
        <Link component="span" underline="hover" variant="subtitle1" color="text.secondary">
          Home
        </Link>
      </NavLink>
      <Typography variant="subtitle2" color={color ? 'white' : 'initial'} component="span">
        {current}
      </Typography>
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
