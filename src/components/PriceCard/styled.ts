import { themeParams } from '@theme';

import styled from 'styled-components';

import { Card } from '@mui/material';

export const CardContainer = styled(Card)`
  max-width: 255;
  padding: ${themeParams.spaces[2]} ${themeParams.spaces[3]} ${themeParams.spaces[5]};
  display: flex;
  flex-direction: column;
  gap: ${themeParams.spaces[2]};
`;
