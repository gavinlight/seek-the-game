import styled from 'styled-components';

import { StyledButton } from 'common/Button/styled';

export const DemoContainer = styled.div`
  padding: 160px 0;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const Video = styled.iframe.attrs({
  frameBorder: 0,
  allow: 'autoplay; encrypted-media',
  allowFullScreen: true,
})`
  margin-top: 50px;
  width: 50%;
  height: 350px;
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  position: absolute;
  width: 55%;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px 50px 50px 85px;

  & ${StyledButton} {
    display: inline-block;
    margin-top: 10px;
    transition: 300ms padding-left, 300ms background-color;

    &:hover {
      padding-left: 36px;
    }
  }
`;

export const Heading = styled.h2`
  margin: 0 0 16px;
  padding-left: 16px;
  font-size: 2em;
  line-height: 1em;
  border-left: 4px solid ${(props) => props.theme.colors.red};
`;

export const Text = styled.p`
  margin: 0 0 10px;
`;
