import styled from 'styled-components';

import { Stack } from '@mui/material';

export const MirroredStack = styled(({ isMirror, ...props }) => <Stack {...props} />)<{
  isMirror: boolean;
}>`
  order: ${({ isMirror }) => (isMirror ? '100' : '0')};
`;
