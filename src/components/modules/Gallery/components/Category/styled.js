import styled, { css } from 'styled-components';
import PT from 'prop-types';

export const CategoryButton = styled.button`
  appearance: none;
  margin: 0;
  border: none;

  ${(props) => props.active && css`
    background-color: ${(props) => props.theme.colors.red};
  `}
`;

CategoryButton.propTypes = {
  active: PT.bool,
};
