import React from 'react';
import PT from 'prop-types';

import { StyledVideo } from './styled';

const Video = ({ url }) => (
  <StyledVideo src={url} />
);

Video.propTypes = {
  url: PT.string,
};

export default Video;
