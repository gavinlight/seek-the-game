import React from 'react';

import useScrollInfo from 'hooks/useScrollInfo';
import scrollIntoView from 'services/scrollIntoView';
import Container from 'common/Container';
import Heading from 'common/Heading';

import MenuItem from './components/MenuItem';
import { HeaderContainer, Menu } from './styled';

const Header = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { hasScrolled, top } = useScrollInfo();
  React.useEffect(() => {
    if (hasScrolled && top > 300 && collapsed) {
      setCollapsed(false);
    } else if (top <= 300 && !collapsed) {
      setCollapsed(true);
    }
  }, [collapsed, hasScrolled, top]);

  return (
    <HeaderContainer collapsed={collapsed}>
      <Container column columnMobile>
        <Heading border={false} onClick={() => scrollIntoView('#intro')}>
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
};

export default Header;
