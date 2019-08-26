import styled, { css } from 'styled-components';
import PT from 'prop-types';

import Heading from 'common/Heading';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px 0;
  color: ${(props) => props.theme.colors.white};
  transition: padding 300ms, background-color 300ms;
  z-index: 1;

  ${Heading} {
    margin-bottom: 0;
    font-weight: 800;
    font-size: 2.2em;
    cursor: pointer;
    transition: color 300ms;

    &:hover {
      color: ${(props) => props.theme.colors.grey.light};
    }
  }

  ${(props) => !props.collapsed && css`
    padding: 5px 0;
    background-color: ${(props) => props.theme.colors.grey.overlay};
  `}
`;

HeaderContainer.propTypes = {
  collapsed: PT.bool,
};
