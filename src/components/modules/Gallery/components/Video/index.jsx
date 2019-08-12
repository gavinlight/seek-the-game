import React from 'react';
import PT from 'prop-types';

const Video = ({ url }) => (
  <div style={{ color: 'white', width: '100%' }}>
    <p>Url: {url}</p>
    <p>Type: video</p>
  </div>
);

Video.propTypes = {
  url: PT.string,
};

export default Video;
