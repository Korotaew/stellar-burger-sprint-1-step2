import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import modalFunctionality from './ModalFunctionality';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ onClose, isHeaderShow, children }) => {
  const { closeModal, addEventESC, removeEventESC } = modalFunctionality(onClose);

  // добавляем обработчик события при открытии модального окна
  useEffect(() => {
    addEventESC();

    // возвращаем функцию для удаления обработчика события при размонтировании компонента
    return () => {
      removeEventESC();
    };
  });

  return ReactDOM.createPortal(
    (
      <div className={styles.wrapper}>
        <ModalOverlay onClose={closeModal} />
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={`${styles.header} ${isHeaderShow ? styles.isHeaderShow : ''}`}>
            {isHeaderShow && <p className="text text_type_main-large">Детали ингредиента</p>}
            <button className={styles.button} onClick={closeModal}>
              <CloseIcon type="primary" />
            </button>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isHeaderShow: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;