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
  display: block;
  max-width: 100%;
  margin: 40px auto;
`;

export const Url = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  word-break: break-word;
`;
