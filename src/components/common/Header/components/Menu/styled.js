import styled from 'styled-components';

export const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0 0 0 auto;
  color: ${(props) => props.theme.colors.white};
`;

export const MenuItem = styled.li`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  list-style: none;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.red};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 300ms;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover:after {
    transform: scaleY(1);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background-color: ${(props) => props.theme.colors.black.opacity};
  cursor: pointer;
`;

export const ModalContent = styled.div`
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 25vh;
  transform: translateX(-50%);
`;

export const ModalClose = styled.img`
  position: fixed;
  z-index: 4;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
