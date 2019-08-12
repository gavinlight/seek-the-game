import React from 'react';
import PT from 'prop-types';

const Audio = ({ url, active }) => (
  <div style={{ display: active ? 'block' : 'none' }}>
    <p>Url: {url}</p>
    <p>Type: audio</p>
  </div>
);

Audio.propTypes = {
  url: PT.string,
  active: PT.bool,
};

export default Audio;
