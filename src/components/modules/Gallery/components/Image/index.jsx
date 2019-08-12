import React from 'react';
import PT from 'prop-types';

import { StyledImage } from './styled';

const Image = ({ url, active }) => (
  <StyledImage src={url} actice={active} />
);

Image.propTypes = {
  url: PT.string,
  active: PT.bool,
};

export default Image;
