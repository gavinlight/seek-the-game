import styled from 'styled-components';
import PT from 'prop-types';

export const StyledButton = styled.button`
  appeareance: none;
  margin: 0;
  padding: 12px 20px;
  cursor: pointer;
  border: none;
  font-size: 1.4em;
  font-family: ${(props) => props.theme.fonts.sourcesans};
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.color]};
  transition: 300ms background-color;

  &:hover {
    background-color: ${(props) => props.theme.colors[props.color].hover};
  }
`;

StyledButton.propTypes = {
  color: PT.oneOf(['red', 'grey']),
};
