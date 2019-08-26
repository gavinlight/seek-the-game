import { css } from 'styled-components';

export const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css` @media (min-width: ${emSize}em) { ${css(...args)}; } `;
  return accumulator;
}, {});

export const queries = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 992px)',
  desktop: '(min-width: 1200px)',
};
