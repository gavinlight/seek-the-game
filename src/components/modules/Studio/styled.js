import styled from 'styled-components';

import { media } from 'styles/utils';

export const StudioContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 20px 0;

  ${media.tablet`
    padding: 100px;
  `}
`;

export const Heading = styled.h2`
  font-size: 3em;
  font-family: ${(props) => props.theme.fonts.rosemary};
  font-weight: 300;
  margin-top: 0;
  text-align: center;

  &:after {
    content: "";
    height: 5px;
    width: 75px;
    display: block;
    margin: 20px auto 40px;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Text = styled.p`
  font-size: 1.2em;
`;

export const Logo = styled.img`
  margin: 40px auto;
  display: block;
`;

export const Url = styled.a`
  font-size: 1.2em;
  font-weight: 700;
  display: block;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;
