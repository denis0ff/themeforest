import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Props } from './types';

export default ({ current, color }: Props) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" color="secondary" separator="|">
      <Link underline="hover" variant="subtitle1" color="secondary" href="/themeforest">
        Home
      </Link>
      <Typography variant="subtitle2" color={color ? 'white' : 'initial'} component="span">
        {current}
      </Typography>
    </Breadcrumbs>
  );
};
