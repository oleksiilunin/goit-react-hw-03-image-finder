import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, Overlay } from './Modal.styled';

const Modal = ({ imageURL, alt, onClickCloseModal }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={onClickCloseModal}>
      <ModalWrapper className="modal">
        <img src={imageURL} alt={alt} />
      </ModalWrapper>
    </Overlay>,
    document.body
  );
};

export default Modal;
