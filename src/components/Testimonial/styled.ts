import { Link } from 'react-router-dom';

import { themeParams } from '@theme';

import styled from 'styled-components';

import { Card, CardMedia } from '@mui/material';

export const CardImage = styled(CardMedia)`
  min-width: 80px;
  height: 80px;
  margin: ${themeParams.spaces[2]} ${themeParams.spaces[3]};
`;

export const TestimonialCard = styled(Link)`
  max-width: 350px;
  &:hover {
    ${themeParams.raisedEffect}
  }
`;
