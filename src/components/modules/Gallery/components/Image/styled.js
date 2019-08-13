import styled from 'styled-components';
import { media } from 'styles/utils';

export const StyledImage = styled.img`
  display: inline-block;
  width: 460px;
  max-width: 100%;
  margin: 0 auto 20px;
  cursor: pointer;

  ${media.tablet`
    width: calc(50% - 10px);
    margin: 0 0 20px;
  `}
`;

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black.opacity};
  cursor: pointer;
`;

export const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 25vh;
  transform: translateX(-50%);
`;

export const ModalClose = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

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
