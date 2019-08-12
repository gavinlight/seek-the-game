import React from 'react';
import PT from 'prop-types';

const Video = ({ url, active }) => (
  <div style={{ display: active ? 'block' : 'none' }}>
    <p>Url: {url}</p>
    <p>Type: video</p>
  </div>
);

Video.propTypes = {
  url: PT.string,
  active: PT.bool,
};

export default Video;
