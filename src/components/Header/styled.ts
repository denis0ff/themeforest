import { themeParams } from '@theme';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${themeParams.headerHeight};
`;
