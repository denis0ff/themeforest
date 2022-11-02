import { Fragment } from 'react';

import DoneIcon from '@mui/icons-material/Done';

import { Stack, Typography } from '@mui/material';

import { Props } from './types';

const ProsList = ({ prosItems }: Props) => (
  <Stack direction="column" spacing={1}>
    {prosItems.map(({ title, subtitle }) => (
      <Fragment key={title}>
        <Typography variant="subtitle2" component="p" alignItems="center" display="flex" gap={1}>
          <DoneIcon color="primary" />
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle2" component="p" sx={{ margin: '16px 0 !important;' }}>
            {subtitle}
          </Typography>
        )}
      </Fragment>
    ))}
  </Stack>
);

export default ProsList;
