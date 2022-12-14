import { themeParams } from '@theme';

import styled from 'styled-components';

import { Card, CardMedia, Grid } from '@mui/material';

export const GridBox = styled(Grid)`
  display: grid;
`;

export const CardImage = styled(CardMedia)`
  max-width: 36px;
  height: 36px;
  margin: ${themeParams.spaces[2]} ${themeParams.spaces[3]};
`;

export const BenefitCard = styled(Card)`
  cursor: default;
  &:hover {
    ${themeParams.raisedEffect}
  }
`;
