import { NavLink } from 'react-router-dom';
import { themeParams } from '@theme';
import styled from 'styled-components';
import { Box } from '@mui/material';

export const Banner = styled.div<{ image: string; width?: string; height: string }>`
  position: relative;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => height}px;
  background: center / cover no-repeat url(${process.env.PUBLIC_URL}/${({ image }) => image}.png);
  background-size: auto;
`;

export const CircleLink = styled(NavLink)`
  position: absolute;
  top: -${themeParams.spaces[5]};
  right: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${themeParams.spaces[6]};
  height: ${themeParams.spaces[6]};
  border-radius: 50%;
  outline: ${themeParams.spaces[2]} solid ${themeParams.colors.white};
  color: ${themeParams.colors.white};
  background-color: ${themeParams.colors.primary};
  & > div {
    position: absolute;
    border-radius: 50%;
    width: calc(${themeParams.spaces[6]} - 15%);
    height: calc(${themeParams.spaces[6]} - 15%);
    border: 1px solid ${themeParams.colors.white};
  }
  &:hover {
    border: ${themeParams.spaces[1]} solid ${themeParams.colors.white};
  }
`;

export const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
