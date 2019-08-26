import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background-color: ${(props) => props.theme.colors.grey.overlay};
  cursor: pointer;
`;

export const Content = styled.div`
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 25vh;
  transform: translateX(-50%);
`;

export const Close = styled.img`
  position: fixed;
  z-index: 4;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
