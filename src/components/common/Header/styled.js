import styled from 'styled-components';

import Heading from 'common/Heading';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.grey.opacity};
  color: ${(props) => props.theme.colors.white};

  ${Heading} {
    margin-bottom: 0;
    font-weight: 800;
    font-size: 2.2em;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0 0 0 auto;
`;
