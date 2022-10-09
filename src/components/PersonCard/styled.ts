import { Banner, themeParams } from '@theme';
import styled from 'styled-components';

export const CardInfo = styled.div`
  position: absolute;
  left: ${themeParams.spaces[3]};
  bottom: ${themeParams.spaces[3]};
`;

export const CardContainer = styled(Banner)<{ isMargin: boolean }>`
  margin-top: -${({ isMargin }) => isMargin && themeParams.spaces[6]};
`;
