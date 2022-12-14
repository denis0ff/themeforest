import styled from 'styled-components';

import { Stack } from '@mui/material';

import { themeParams } from './theme';

export const Logo = styled.div<{ image: string }>`
  width: ${themeParams.logoSize[0]};
  height: ${themeParams.logoSize[1]};
  background-image: url(${process.env.PUBLIC_URL}/assets/${({ image }) => image}.svg);
`;

export const Social = styled.a<{ path: string }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: center / contain no-repeat
    url(${process.env.PUBLIC_URL}/assets/${({ path }) => path}.svg);
`;

type WrapperProps = {
  variant: 'fenced' | 'none';
  bgColor: 'default' | 'grey' | 'dark';
  isBordered?: boolean;
};

export const SectionWrapper = styled(Stack)<WrapperProps>`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: ${({ variant }) => (variant === 'fenced' ? '1110px' : '100%')};
  background-color: ${({ bgColor }) => themeParams.bgColor[bgColor]};
  ${({ isBordered }) => isBordered && `border-bottom: 1px solid ${themeParams.colors.border}`};
`;

export const Banner = styled.div<{ image: string; width?: string; height: string }>`
  position: relative;
  min-width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => height}px;
  background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${({ image }) => image}.png);
  background-size: auto;
`;
