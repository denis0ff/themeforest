import { Card } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const PriceCard = styled(Card)`
  max-width: 255;
  padding: ${themeParams.spaces[2]};
  display: flex;
  flex-direction: column;
  gap: ${themeParams.spaces[2]};
`;
