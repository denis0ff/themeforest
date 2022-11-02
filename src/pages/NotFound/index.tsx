import { Typography } from '@mui/material';

const NotFoundPage = () => (
  <>
    <Typography variant="h1" textAlign="center" color="error" p={2}>
      404 Error
    </Typography>
    <Typography variant="h2" textAlign="center" color="info" p={2}>
      <Typography variant="h2" component="span" color="primary">
        Ooops!
      </Typography>{' '}
      Such page is not found
    </Typography>
  </>
);

export default NotFoundPage;
