import { Stack } from '@mui/material';
import styled from 'styled-components';

export const MirroredStack = styled(({ isMirror, ...props }) => <Stack {...props} />)<{
  isMirror: boolean;
}>`
  order: ${({ isMirror }) => (isMirror ? '100' : '0')};
`;
