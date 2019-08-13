import React from 'react';
import PT from 'prop-types';

import { StyledAudio } from './styled';

const Audio = ({ url }) => (
  <StyledAudio src={url} />
);

Audio.propTypes = {
  url: PT.string,
};

export default Audio;
