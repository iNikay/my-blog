import React from 'react';
import styles from './ModalWindow.module.scss';
import closeModal from '../../assets/icons/closeModal.svg';

export const ModalWindow = () => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}></div>
      <div className={styles.modalContent}>
        <button className={styles.closeModal}>
          <img src={closeModal} alt="close" />
        </button>

        <div className={styles.title}>Вход в аккаунт</div>
        <div className={styles.loginForm}>
          <form>
            <span>Email</span>
            <input type="text" />
            <span>Пароль</span>
            <input type="password" />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};
