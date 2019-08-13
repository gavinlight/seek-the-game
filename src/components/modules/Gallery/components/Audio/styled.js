import styled from 'styled-components';

export const StyledAudio = styled.iframe.attrs({
  frameBorder: 'no',
  scrolling: 'no',
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  width: 100%;
  height: 166px;
  margin: 20px 0;
`;
