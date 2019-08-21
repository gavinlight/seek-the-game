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
