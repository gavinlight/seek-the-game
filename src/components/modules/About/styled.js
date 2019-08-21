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
  padding: 50px 0;
  background-color: ${(props) => props.theme.colors.grey.opacity};

  ${media.tablet`
    padding: 75px 0;
  `}
`;

export const TextContainer = styled.div`
  padding: 75px 0;

  ${media.tablet`
    padding: 200px 0;
  `}
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1.2em;

  ${media.tablet`
    font-size: 2em;
  `}
`;
