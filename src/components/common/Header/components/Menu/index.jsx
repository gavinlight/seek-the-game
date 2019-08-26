import React from 'react';

import useMediaQuery from 'hooks/useMediaQuery';
import scrollIntoView from 'services/scrollIntoView';
import { queries } from 'styles/utils';
import IconHamburger from 'images/hamburger.png';

import Modal from 'common/Modal';

import { StyledMenu, Hamburger, MenuItem, ModalContent } from './styled';

const Menu = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [activeMedia] = useMediaQuery(queries);

  const navigate = (to) => () => {
    setMenuActive(false);
    scrollIntoView(to);
  };

  const Items = () => (
    <>
      <MenuItem onClick={navigate('#about')}>Game</MenuItem>
      <MenuItem onClick={navigate('#gallery')}>Media</MenuItem>
      <MenuItem onClick={navigate('#story')}>Prologue</MenuItem>
      <MenuItem onClick={navigate('#studio')}>Team</MenuItem>
      <MenuItem onClick={navigate('#contact')}>Contact</MenuItem>
    </>
  );

  return (
    <StyledMenu>
      {activeMedia === 'mobile'
        ? (
          <>
            <Hamburger
              src={IconHamburger}
              alt="hamburger"
              onClick={() => setMenuActive(true)}
            />
            {menuActive && (
              <Modal open={menuActive} closeModal={() => setMenuActive(false)}>
                <ModalContent>
                  <Items />
                </ModalContent>
              </Modal>
            )}
          </>
        )
        : <Items />
      }
    </StyledMenu>
  );
};

export default Menu;
