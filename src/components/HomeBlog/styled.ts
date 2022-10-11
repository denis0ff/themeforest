import { Stack } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const Header = styled(Stack)`
  width: 100%;
  margin: ${themeParams.spaces[4]};
  justify-content: space-around;
  align-items: center;
`;
