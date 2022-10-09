import { Stack } from '@mui/material';
import styled from 'styled-components';

export const MirroredStack = styled(Stack)<{ isMirror: boolean }>`
  order: ${({ isMirror }) => (isMirror ? '100' : '0')};
`;
