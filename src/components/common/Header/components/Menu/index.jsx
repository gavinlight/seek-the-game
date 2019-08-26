import React from 'react';

import useMediaQuery from 'hooks/useMediaQuery';
import scrollIntoView from 'services/scrollIntoView';
import { queries } from 'styles/utils';

import { StyledMenu, MenuItem } from './styled';

const Menu = () => {
  const navigate = (to) => () => scrollIntoView(to);

  return (
    <StyledMenu>
      <MenuItem onClick={navigate('#about')}>Game</MenuItem>
      <MenuItem onClick={navigate('#gallery')}>Media</MenuItem>
      <MenuItem onClick={navigate('#story')}>Prologue</MenuItem>
      <MenuItem onClick={navigate('#studio')}>Team</MenuItem>
      <MenuItem onClick={navigate('#contact')}>Contact</MenuItem>
    </StyledMenu>
  );
};

export default Menu;
