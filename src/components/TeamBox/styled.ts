import { Grid } from '@mui/material';
import { themeParams } from '@theme';
import styled from 'styled-components';

export const GridBox = styled(Grid)<{ isSkew?: boolean }>`
  display: grid;
  margin-top: ${themeParams.spaces[6]} !important;
  padding: ${themeParams.spaces[6]} ${themeParams.spaces[2]};
  ${({ isSkew }) =>
    isSkew &&
    `& > :first-child {
    margin-top: -${themeParams.spaces[5]};
    }
    & > :last-child {
      margin-bottom: -${themeParams.spaces[5]};
    }`}
`;
