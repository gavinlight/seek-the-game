import React from 'react';
import PT from 'prop-types';

const MenuItem = ({ to, children }) => (
  <>
    {children}
  </>
);

MenuItem.propTypes = {
  to: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default MenuItem;
