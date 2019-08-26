import styled from 'styled-components';

export const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0 0 0 auto;
  color: ${(props) => props.theme.colors.white};
`;

export const Hamburger = styled.img`
  cursor: pointer;
`;

export const MenuItem = styled.li`
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  list-style: none;
  transition: color 300ms;

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

export const ModalContent = styled.div`
  ${MenuItem} {
    margin-right: 0;
    font-size: 2.6em;
    font-weight: 800;
    text-align: center;
    margin-bottom: 16px;
    transition: color 300ms;

    &:last-child {
      margin-bottom: 0;
    }

    &:after {
      display: none;
    }

    &:hover {
      color: ${(props) => props.theme.colors.grey.light};
    }
  }
`;
