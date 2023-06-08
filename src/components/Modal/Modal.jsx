import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};
