import React from 'react';
import PT from 'prop-types';

const Image = ({ url, active }) => (
  <div style={{ display: active ? 'block' : 'none' }}>
    <p>Url: {url}</p>
    <p>Type: image</p>
  </div>
);

Image.propTypes = {
  url: PT.string,
  active: PT.bool,
};

export default Image;
