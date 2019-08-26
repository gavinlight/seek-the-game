import React from 'react';
import PT from 'prop-types';

import { StyledButton } from './styled';

const Button = ({ color, uppercase, children, ...otherProps }) => (
  <StyledButton color={color} uppercase={uppercase} {...otherProps}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PT.oneOf(['red', 'grey']),
  uppercase: PT.bool,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

Button.defaultProps = {
  color: 'red',
  uppercase: true,
};

export default Button;
