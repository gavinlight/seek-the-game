import styled from 'styled-components';

import IntroBackground from 'images/intro-bg.jpg';
import Container from 'common/Container';

export const IntroContainer = styled.div`
  position: relative;
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

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

export const Heading = styled.h1`
  font-size: 3.2em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin: 0 0 25px;
`;

export const SeeMore = styled.button`
  appearance: none;
  margin: 0;
  border: 0;
  padding: 7px 20px 2px;
  font-size: 2em;
  position: absolute;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.rosemary};
  cursor: pointer;
  transition: 300ms transform;

  &:hover {
    transform: translate(-50%, -5px);
  }
`;

export const PayPal = styled.div`
  margin-top: 60px;

  & input[type="image"] {
    margin-top: 8px;
  }
`;

export const PayPalText = styled.p`
  margin: 0 0 4px;
  color: ${(props) => props.theme.colors.white};
`;
