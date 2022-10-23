import { Paper, Stack, styled } from '@mui/material';
import { themeParams } from '@theme';

export const Container = styled(Paper)`
  width: 100%;
  padding: ${themeParams.spaces[3]};
  margin: ${themeParams.spaces[3]};
`;

export const FaqTitle = styled(Stack)`
  cursor: pointer;
`;
