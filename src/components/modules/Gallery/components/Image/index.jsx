import React from 'react';
import PT from 'prop-types';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import IconClose from 'images/icon-close.png';

import {
  StyledImage, ModalBackground, ModalImage, ModalContent, ModalTitle, ModalClose,
} from './styled';

const Image = ({ url, title = 'Seek', active }) => {
  const modalRef = React.useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const onSetModal = (state) => () => setModalOpen(state);

  React.useEffect(() => {
    const scrollLockFn = modalOpen ? disableBodyScroll : enableBodyScroll;
    scrollLockFn(modalRef.current);

    return () => clearAllBodyScrollLocks();
  }, [modalOpen]);

  return (
    <>
      <StyledImage
        onClick={onSetModal(true)}
        src={url}
        alt={title}
      />
      {modalOpen && (
        <div ref={modalRef}>
          <ModalBackground onClick={onSetModal(false)} />
          <ModalClose onClick={onSetModal(false)} src={IconClose} />
          <ModalContent>
            <ModalImage src={url} alt={title} />
            <ModalTitle>{title}</ModalTitle>
          </ModalContent>
        </div>
      )}
    </>
  );
};

Image.propTypes = {
  url: PT.string,
  title: PT.string,
  active: PT.bool,
};

export default Image;
