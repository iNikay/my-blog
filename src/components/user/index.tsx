import React from 'react';

import user from '../../assets/user.png';

import styles from './User.module.scss';

export const User = () => {
  return (
    <section className={styles.userProfile}>
      <div className={styles.userProfileWrapper}>
        <h1 className={styles.userName}>Vasya Pupkin</h1>
        <h2 className={styles.userTitle}>Блог фронтенд-разработчика</h2>
        <div className={styles.avatar}>
          <img src={user} alt="avatar" />
        </div>
        <article className={styles.aboutMe}>
          <h3>Обо мне</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu
            risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae
            quis nunc suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed porta ac enim.
            Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla sapien
            vitae nulla. Nisl
          </p>
        </article>
      </div>
    </section>
  );
};
