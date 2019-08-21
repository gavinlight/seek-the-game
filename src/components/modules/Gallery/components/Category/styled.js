import styled, { css } from 'styled-components';
import PT from 'prop-types';

export const CategoryButton = styled.button`
  appearance: none;
  cursor: pointer;
  margin: 0;
  padding: 10px 20px;
  border: none;
  transition: background-color 300ms;
  font-size: 1.5em;
  font-family: ${(props) => props.theme.fonts.rosemary};
  font-weight: 300;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.grey.dark};

  ${(props) => props.active && css`
    background-color: ${(props) => props.theme.colors.red};
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.grey.hover};

    ${(props) => props.active && css`
      background-color: ${(props) => props.theme.colors.red.hover};
    `}
  }

  &:active, &:focus {
    outline: none;
  }
`;

CategoryButton.propTypes = {
  active: PT.bool,
};
