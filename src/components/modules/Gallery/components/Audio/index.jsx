import React from 'react';
import PT from 'prop-types';

const Audio = ({ url }) => (
  <div style={{ color: 'white', width: '100%' }}>
    <p>Url: {url}</p>
    <p>Type: audio</p>
  </div>
);

Audio.propTypes = {
  url: PT.string,
};

export default Audio;
