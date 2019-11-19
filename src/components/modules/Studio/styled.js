import styled from 'styled-components';

import { media } from 'styles/utils';

export const StudioContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 20px 0 40px;

  ${media.tablet`
    padding: 100px 0 40px;
  `}
`;

export const Text = styled.p`
  font-size: 1.2em;
`;

export const LogoContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
