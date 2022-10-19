import { Alert, AlertTitle } from '@mui/material';
import { Props } from './types';

export default ({ severity, title, description }: Props) => (
  <Alert severity={severity}>
    <AlertTitle>{title}</AlertTitle>
    {description}
  </Alert>
);
