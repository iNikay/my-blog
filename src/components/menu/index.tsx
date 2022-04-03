import React from 'react';
import classNames from 'classnames';

import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className={classNames(styles.menu, { [styles.show]: showMenu, [styles.hide]: !showMenu })}>
      <div className={styles.topBlock}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>Вася Пупкин</div>
          <div className={styles.date}>Дата регистрации: 12 августа 2019 в 08:06</div>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">
                <div> Главная </div>
              </Link>
            </li>
            <li>
              <Link to="/user/userinfo">
                <div> Мой профиль</div>
              </Link>
            </li>
            <li>
              <Link to="/user/createarticle">
                {' '}
                <div>Создать запись</div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div> Выйти</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottomBlock} onClick={() => setShowMenu(!showMenu)}>
        <div className={styles.burgerBtn}>
          <div className={styles.strip1}></div>
          <div className={styles.strip2}></div>
          <div className={styles.strip3}></div>
        </div>
        <span>Меню</span>
      </div>
    </div>
  );
};
