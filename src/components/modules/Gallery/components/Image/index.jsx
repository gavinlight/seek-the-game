import React from 'react';
import PT from 'prop-types';

import Modal from 'common/Modal';

import { StyledImage, ModalImage, ModalTitle } from './styled';

const Image = ({ url, title = 'Seek', active }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <StyledImage
        onClick={() => setModalOpen(true)}
        image={url}
        role="img"
        alt={title}
      />
      {modalOpen && (
        <Modal open={modalOpen} closeModal={() => setModalOpen(false)}>
          <ModalImage src={url} alt={title} />
          <ModalTitle>{title}</ModalTitle>
        </Modal>
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
