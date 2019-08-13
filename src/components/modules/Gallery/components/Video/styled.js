import styled from 'styled-components';

export const StyledVideo = styled.iframe.attrs({
  frameBorder: 0,
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  width: 50%;
  height: 325px;
  margin: 20px auto;
`;
