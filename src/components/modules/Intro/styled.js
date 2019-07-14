import styled from 'styled-components';
import { media } from 'styles/utils';

import IntroBackground from 'images/intro-bg.jpg';
import Container from 'common/Container';
import { StyledButton } from 'common/Button/styled';

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
    text-align: center;

    ${media.tablet`
      text-align: left;
      max-width: 500px;
      margin-left: 50px;
    `}
  }

  ${StyledButton} {
    font-size: .9em;

    ${media.tablet`
      font-size: 1em;
    `}
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
  font-size: 1.5em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin: 0 0 25px;

  ${media.tablet`
    font-size: 3.2em;
  `}
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
