import React from 'react';

import useScrollInfo from 'hooks/useScrollInfo';

import scrollIntoView from 'services/scrollIntoView';
import Container from 'common/Container';
import Heading from 'common/Heading';

import Menu from './components/Menu';
import { HeaderContainer } from './styled';

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
        <Menu />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
