import { themeParams } from '@theme';

import styled from 'styled-components';

import { Grid } from '@mui/material';

export const GridBox = styled(Grid)`
  display: grid;
  margin-top: ${themeParams.spaces[5]} !important;
  padding: ${themeParams.spaces[6]} ${themeParams.spaces[2]};
`;
