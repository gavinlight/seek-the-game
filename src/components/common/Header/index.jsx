import React from 'react';

import Container from 'common/Container';
import Heading from 'common/Heading';

import MenuItem from './components/MenuItem';
import { HeaderContainer, Menu } from './styled';

const Header = () => (
  <HeaderContainer>
    <Container column columnMobile>
      <Heading border={false}>
        Seek
      </Heading>
      <Menu>
        <MenuItem to="#game">Game</MenuItem>
        <MenuItem to="#media">Media</MenuItem>
        <MenuItem to="#prologue">Prologue</MenuItem>
        <MenuItem to="#team">Team</MenuItem>
        <MenuItem to="#contact">Contact</MenuItem>
      </Menu>
    </Container>
  </HeaderContainer>
);

export default Header;
