import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import {
  Overlay,
  ModalWindow,
  ModalFormBtn,
  ModalFormBtnLabel,
} from '../SearchResult.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, onClose } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <img src={src} alt="" />
          <ModalFormBtn type="submit" onClick={onClose}>
            <ModalFormBtnLabel>Search</ModalFormBtnLabel>
          </ModalFormBtn>
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
