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
        <MenuItem to="#about">Game</MenuItem>
        <MenuItem to="#gallery">Media</MenuItem>
        <MenuItem to="#story">Prologue</MenuItem>
        <MenuItem to="#studio">Team</MenuItem>
        <MenuItem to="#contact">Contact</MenuItem>
      </Menu>
    </Container>
  </HeaderContainer>
);

export default Header;
