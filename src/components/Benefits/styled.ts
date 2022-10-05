import { CardMedia, Grid } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const GridBox = styled(Grid)`
  margin: ${themeParams.spaces[6]} ${themeParams.spaces[1]} !important;
  & > :first-child {
    margin-top: -${themeParams.spaces[5]};
  }
  & > :last-child {
    margin-bottom: -${themeParams.spaces[5]};
  }
`;

export const CardImage = styled(CardMedia)`
  max-width: 36px;
  height: 36px;
  margin: ${themeParams.spaces[2]} ${themeParams.spaces[3]};
`;
