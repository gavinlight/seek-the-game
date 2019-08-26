import React from 'react';
import PT from 'prop-types';

import scrollIntoView from 'services/scrollIntoView';

import { StyledMenuItem } from './styled';

const MenuItem = ({ to, children }) => (
  <StyledMenuItem onClick={() => scrollIntoView(to)}>
    {children}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  to: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default MenuItem;
