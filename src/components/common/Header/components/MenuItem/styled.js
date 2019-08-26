import styled from 'styled-components';

export const StyledMenuItem = styled.li`
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