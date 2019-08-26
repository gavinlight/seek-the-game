import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  list-style: none;

  &:last-child {
    margin-right: 0;
  }
`;


const MenuItem = ({ to, children }) => {
  const navigate = () => {
    const scrollElem = document.querySelector(to);

    if (scrollElem) {
      window.scrollTo({
        top: scrollElem.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledMenuItem onClick={navigate}>
      {children}
    </StyledMenuItem>
  );
};

MenuItem.propTypes = {
  to: PT.string,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default MenuItem;
