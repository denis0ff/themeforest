import { CardMedia, Grid } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const GridBox = styled(Grid)`
  display: grid;
`;

export const CardImage = styled(CardMedia)`
  max-width: 36px;
  height: 36px;
  margin: ${themeParams.spaces[2]} ${themeParams.spaces[3]};
`;
