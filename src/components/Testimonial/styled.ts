import { CardMedia } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const CardImage = styled(CardMedia)`
  min-width: 80px;
  height: 80px;
  margin: ${themeParams.spaces[2]} ${themeParams.spaces[3]};
`;
