import React from 'react';

import eye from '../../assets/icons/eye.svg';
import fon from '../../assets/fon.png';

import styles from './FullArticle.module.scss';
import { CommentsArticle } from '../commentsArticle';

export const FullArticle = () => {
  return (
    <article className={styles.fullArticle}>
      <section className={styles.article}>
        <div className={styles.topBlock}>
          <img src={fon} alt="" />
          <div className={styles.topBlockContent}>
            <div className={styles.container}>
              <div className={styles.info}>
                <div className={styles.date}>12 августа 2019 в 08:06</div>
                <div className={styles.views}>
                  <img src={eye} alt="eye" />
                  <span>301</span>
                </div>
              </div>
              <h1 className={styles.title}>Какой-то очень интересный заголовок</h1>
              <h2 className={styles.description}>
                Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз то начинают,
                то забрасывают изучение технологий.
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu
            risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae
            quis nunc suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed porta ac enim.
            Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla sapien
            vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet amet, laoreet proin.
            Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.
          </p>
        </div>
      </section>
      <div className={styles.container}>
        <CommentsArticle/>
      </div>
    </article>
  );
};
