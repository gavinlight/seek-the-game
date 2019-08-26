import React from 'react';
import PT from 'prop-types';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import CloseIcon from 'images/icon-close.png';

import { Background, Close, Content } from './styled';

const Modal = ({ open, closeModal, children }) => {
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    const scrollLockFn = open ? disableBodyScroll : enableBodyScroll;
    scrollLockFn(modalRef.current);

    return () => clearAllBodyScrollLocks();
  }, [open]);

  return (
    <div ref={modalRef}>
      <Background onClick={closeModal} />
      <Close onClick={closeModal} src={CloseIcon} />
      <Content>{children}</Content>
    </div>
  );
};

Modal.propTypes = {
  open: PT.bool.isRequired,
  closeModal: PT.func.isRequired,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Modal;
