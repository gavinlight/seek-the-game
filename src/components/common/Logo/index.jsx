import React from 'react';
import PT from 'prop-types';

import NormalLogo from 'images/logo.svg';
import InvertedLogo from 'images/logo-inverted.svg';

const Logo = ({ size, inverted }) => {
  const LogoComponent = inverted ? InvertedLogo : NormalLogo;

  return (
    <LogoComponent
      width={size}
      height={size}
      alt="Attic Box Games Logo"
    />
  );
};

Logo.propTypes = {
  size: PT.number,
  inverted: PT.bool,
};

Logo.defaultProps = {
  size: 100,
};

export default Logo;
