// ПОРТАЛ ДЛЯ ВИДИМОСТИ МОДАЛЬНОГО ОКНА
// МЕТОД componentDidMount - ПРИ ОТКРЫТИИ, ТО ЕСТЬ СОЗДАНИИ МОДАЛКИ
// МЕТОД componentWillUnmount - ПРИ ЗАКРЫТИИ, ТО ЕСТЬ УДАЛЕНИИ МОДАЛКИ

import React, { Component } from 'react';

// createPortal - Метод из react-dom для создания отдельного портала
import { createPortal } from 'react-dom';
import '../../../styles/styles.css';

// Модальное окно рендерится в отдельный елемент-контейнер <div id="modal-root"></div>
// в файле index.html в папке public проекта
// такой контейнер для модалки находится сразу под основным корневым контейнером <div id="root"></div>
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // СТАДИЯ СОЗДАНИЯ, МОНТИРОВАНИЯ МОДАЛКИ - ЭТО ОТКРЫТИЕ МОДАЛКИ
  // на стадии монтирования модалки добавляется слушатель события
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // СТАДИЯ УДАЛЕНИЯ - ЭТО ЗАКРЫТИЕ МОДАЛКИ
  // При закрытии модалки снимается слушатель события с window,
  // который работал на клавишу Escape
  // Если этого не сделать - ПОЛУЧИТСЯ ЗАЦЫКЛИВАНИЕ при нажатии
  // Escape несколько раз, так как модалки уже нету, нельзя закрыть и
  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Метод handleKeyDown - при нажатии пользователем клавиши Escape - закрытие модалки
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  // handleBackdropClick - закрытие модалки при клике на бекдроп,
  // это получится только если currentTarget и target совпадают
  // то есть если мы кликнем на саму модалку - они не совпадут:
  // target будет модалка, а currentTarget будет бекдроп
  handleBackdropClick = event => {
    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  // РЕЗУЛЬТАТ ВЫЗОВА МЕТОДА createPortal
  // При вызове createPortal в  render, ему передается два аргумента:
  //  1) что зарендерить; 2) куда зарендерить.
  // Рендер модального окна в специальный портал, отдельно от основных элементов
  // С точки зрения React Dom - модальное окно находится в структуре
  // других компонентов, а с точки зрения html-файла - в отдельном
  // корневом контейнере - <div id="modal-root"></div>
  render() {
    // ПОЛУЧЕНИЕ ПРОПСОВ ИЗ SearchRequest
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
