import React from 'react';
import PT from 'prop-types';

import { StyledMenuItem } from './styled';

const MenuItem = ({ to, children }) => {
  const navigate = () => {
    const scrollElem = document.querySelector(to);
    if (scrollElem) {
      scrollElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledMenuItem onClick={navigate}>
      {children}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  to: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default MenuItem;
