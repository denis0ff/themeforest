import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Props } from './types';

export default ({ current, color }: Props) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      color={color === 'white' ? 'white' : 'text.primary'}
      separator="|"
    >
      <Link underline="hover" color={color === 'white' ? '#9497A1' : 'inherit'} href="/">
        Home
      </Link>
      <Typography color={color === 'white' ? 'white' : 'text.primary'}>{current}</Typography>
    </Breadcrumbs>
  );
};
