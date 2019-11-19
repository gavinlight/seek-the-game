import styled from 'styled-components';
import PT from 'prop-types';
import { media } from 'styles/utils';

export const StyledImage = styled.div`
  display: inline-block;
  width: 460px;
  height: 225px;
  max-width: 100%;
  margin: 0 auto 20px;
  cursor: pointer;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet`
    height: 250px;
    width: calc(50% - 10px);
    margin: 0 0 20px;
  `}

  ${media.mobile`
    height: 275px;
  `}
`;

StyledImage.propTypes = {
  image: PT.string,
};

export const ModalImage = styled.img`
  display: block;
  width: 95vw;
  margin-bottom: 40px;

  ${media.desktop`
    margin: 0 2.5vw 20px;
    height: 50vh;
    width: auto;
  `}
`;

export const ModalTitle = styled.h3`
  font-size: 2em;
  text-align: center;
`;
