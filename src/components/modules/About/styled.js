import styled from 'styled-components';
import { media } from 'styles/utils';

import AboutBackground from 'images/about-bg.jpg';

export const AboutContainer = styled.div`
  background-image: url(${AboutBackground});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const QuoteContainer = styled.div`
  padding: 75px 0;
  background-color: ${(props) => props.theme.colors.grey.opacity};
`;

export const TextContainer = styled.div`
  padding: 200px 0;
`;

export const Heading = styled.h2`
  font-size: 3em;
  font-family: ${(props) => props.theme.fonts.rosemary};

  &:after {
    content: "";
    height: 5px;
    width: 75px;
    display: block;
    margin: 20px auto 40px;
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 2em;
`;
