import { Alert, AlertTitle } from '@mui/material';

import { Props } from './types';

const AlertMessage = ({ severity, title, description }: Props) => (
  <Alert severity={severity}>
    <AlertTitle>{title}</AlertTitle>
    {description}
  </Alert>
);

export default AlertMessage;
