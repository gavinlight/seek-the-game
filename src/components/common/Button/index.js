import React from 'react';
import PT from 'prop-types';

import { StyledButton } from './styled';

const Button = ({ color, children, ...otherProps }) => (
  <StyledButton color={color} {...otherProps}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PT.oneOf(['red', 'grey']),
  children: PT.element.isRequired,
};

Button.defaultProps = {
  color: 'red',
};

export default Button;
