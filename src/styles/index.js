import { createGlobalStyle } from 'styled-components';

import RosemaryFontEot from 'static/fonts/rosemary/rosemary_roman-webfont.eot?external';
import RosemaryFontTtf from 'static/fonts/rosemary/rosemary_roman-webfont.ttf?external';
import RosemaryFontSvg from 'static/fonts/rosemary/rosemary_roman-webfont.svg?external';
import RosemaryFontWoff from 'static/fonts/rosemary/rosemary_roman-webfont.woff?external';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700');
  @font-face {
    font-family: 'Rosemary';
    src: url('${RosemaryFontEot}');
    src: url('${RosemaryFontEot}?#iefix') format('embedded-opentype'),url('${RosemaryFontWoff}') format('woff'),url('${RosemaryFontTtf}') format('truetype'),url('${RosemaryFontSvg}#rosemary_romanregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;
