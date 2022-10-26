import { Stack, styled } from '@mui/system';
import { themeParams } from '@theme';

export const NewsContainer = styled(Stack)`
  &:hover {
    ${themeParams.raisedEffect}
  }
`;
