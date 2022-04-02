import React from 'react';
import classNames from 'classnames';

import styles from './Menu.module.scss';

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
              <a href="/">
                <div> Главная </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div> Мой профиль</div>
              </a>
            </li>
            <li>
              <a href="/">
                {' '}
                <div>Создать запись</div>
              </a>
            </li>
            <li>
              <a href="/">
                <div> Выйти</div>
              </a>
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
