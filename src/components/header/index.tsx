import React from 'react';
import classNames from 'classnames';

import styles from './Header.module.scss';
import close from '../../assets/icons/close.svg';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';
import { ModalWindow } from '../modalWindow';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [searchShow, setSearchShow] = React.useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/">
            {' '}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          <div className={styles.rightBlock}>
            <div onClick={() => setSearchShow(true)}>
              <img src={search} alt="search" />
              <span className={styles.tooltipText}>Поиск</span>
            </div>
            <div>
              <img src={user} alt="user" />
              <span className={styles.tooltipText}>Пользователь</span>
            </div>
          </div>
        </div>

        <div
          className={classNames(styles.searchBlock, {
            [styles.show]: searchShow,
            [styles.hide]: !searchShow,
          })}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Поиск статьи по заголовку или тексту..."
          />
          <img
            className={styles.closeInput}
            src={close}
            alt=""
            onClick={() => setSearchShow(false)}
          />
        </div>
      </div>
    </>
  );
};
