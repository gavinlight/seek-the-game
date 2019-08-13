import styled from 'styled-components';
import { media } from 'styles/utils';

export const StyledVideo = styled.iframe.attrs({
  frameBorder: 0,
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  width: 95%;
  height: 275px;
  margin: 20px auto;

  ${media.tablet`
    width: 50%;
    height: 325px;
  `}
`;
