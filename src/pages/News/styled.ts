import { Stack } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const Post = styled(Stack)`
  color: ${themeParams.colors.secondary};
  & > blockquote {
    margin-left: ${themeParams.spaces[4]};
    padding-left: ${themeParams.spaces[3]};
    border-left: 4px solid ${themeParams.colors.primary};
  }
  & strong {
    color: ${themeParams.colors.primary};
    font-weight: normal;
    text-decoration: underline;
  }
`;
