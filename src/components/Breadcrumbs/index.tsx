import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default ({ current }: { current: string }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="|">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
};
