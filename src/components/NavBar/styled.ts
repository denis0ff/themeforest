import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Link = styled(NavLink)`
  opacity: 0.6;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    opacity: 1;
  }
`;
