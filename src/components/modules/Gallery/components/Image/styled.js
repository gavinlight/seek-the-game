import styled from 'styled-components';
import PT from 'prop-types';

export const StyledImage = styled.img`
  display: inline-block;
  width: calc(50% - 10px);
  margin-bottom: 20px;
`;

StyledImage.propTypes = {
  active: PT.bool,
};
