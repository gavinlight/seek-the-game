import React from 'react';

import useMediaQuery from 'hooks/useMediaQuery';
import scrollIntoView from 'services/scrollIntoView';
import { queries } from 'styles/utils';

import IconClose from 'images/icon-close.png';

import { StyledMenu, MenuItem, ModalBackground, ModalClose, ModalContent } from './styled';

const Menu = () => {
  const modalRef = React.useRef(null);
  const [menuActive, setMenuActive] = React.useState(false);
  const [activeMedia] = useMediaQuery(queries);

  const setMenu = (active) => () => setMenuActive(active);
  const navigate = (to) => () => scrollIntoView(to);

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
            <button type="button" onClick={setMenu(true)}>Open menu</button>
            {menuActive && (
              <div ref={modalRef}>
                <ModalBackground onClick={setMenu(false)} />
                <ModalClose onClick={setMenu(false)} src={IconClose} />
                <ModalContent>
                  <Items />
                </ModalContent>
              </div>
            )}
          </>
        )
        : <Items />
      }
    </StyledMenu>
  );
};

export default Menu;
