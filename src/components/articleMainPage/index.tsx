import React from 'react';

import eye from '../../assets/icons/eye.svg';
import fon from '../../assets/fon.png';

import styles from './ArticleMainPage.module.scss';

export const ArticleMainPage = () => {
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
      </section>
    </article>
  );
};
