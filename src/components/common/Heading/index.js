import styled from 'styled-components';
import PT from 'prop-types';

const Heading = styled.h2`
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
    background-color: ${(props) => props.theme.colors[props.variant]};
  }
`;

Heading.propTypes = {
  variant: PT.oneOf(['white', 'grey', 'red']),
};

Heading.defaultProps = {
  variant: 'white',
};

export default Heading;
