import styled from 'styled-components';

import IntroBackground from 'images/intro-bg.jpg';
import Container from 'common/Container';

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url(${IntroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${Container} {
    max-width: 500px;
    margin-left: 50px;
  }
`;

export const Heading = styled.h1`
  font-size: 3.2em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin: 0 0 25px;
`;
