import { themeParams } from '@theme';

import { Stack, styled } from '@mui/system';

export const NewsContainer = styled(Stack)`
  &:hover {
    ${themeParams.raisedEffect}
  }
`;
