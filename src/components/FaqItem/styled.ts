import { themeParams } from '@theme';

import { Paper, Stack, styled } from '@mui/material';

export const Container = styled(Paper)`
  width: 100%;
  padding: ${themeParams.spaces[3]};
  margin: ${themeParams.spaces[3]};
  &:hover {
    ${themeParams.raisedEffect}
  }
`;

export const FaqTitle = styled(Stack)`
  cursor: pointer;
`;
