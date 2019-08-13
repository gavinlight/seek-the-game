import styled from 'styled-components';

export const StyledImage = styled.img`
  display: inline-block;
  width: calc(50% - 10px);
  margin-bottom: 20px;
  cursor: pointer;
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
  margin-bottom: 40px;
  height: 50vh;
  width: auto;
`;

export const ModalTitle = styled.h3`
  font-size: 2em;
  text-align: center;
`;
