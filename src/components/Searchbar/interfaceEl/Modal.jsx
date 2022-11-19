import React, { Component } from 'react';

import { createPortal } from 'react-dom';
import '../../../styles/styles.css';

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
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={src} alt="" />
          <button type="submit" className="ModalForm-button" onClick={onClose}>
            <span className="ModalForm-button-label">Search</span>
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
