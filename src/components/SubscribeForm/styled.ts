import { InputBase, Paper } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const InputContainer = styled(Paper)`
  padding: ${themeParams.spaces[1]} ${themeParams.spaces[2]};
  margin: ${themeParams.spaces[1]} ${themeParams.spaces[0]};
  display: flex;
  align-items: center;
  min-width: 445px;
  min-height: 54px;
`;

export const Input = styled(InputBase)`
  margin-left: ${themeParams.spaces[1]};
  flex: 1;
`;
