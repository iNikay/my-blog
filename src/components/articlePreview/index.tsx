import React from 'react';

import article1 from '../../assets/article1.png';
import eye from '../../assets/icons/eye.svg';
import styles from './ArticlePreview.module.scss';

export const ArticlePreview = () => {
  return (
    <article className={styles.article}>
      <div>
        <div className={styles.title}>JavaScript: Как с помощью Dadata определить город по IP?</div>
        <div className={styles.text}>
          На работе потребовалось запилить задачу для автоматического определения города при
          совершении заказа. Было решено сделать это на фронте, ибо бек был занят.
        </div>
        <div className={styles.info}>
          <div className={styles.date}>12 августа 2019 в 08:06</div>
          <div className={styles.views}>
            <img src={eye} alt="eye" />
            <span>301</span>
          </div>
        </div>
      </div>
      <div className={styles.articleImg}>
        <img src={article1} alt="articleImg" />
      </div>
    </article>
  );
};
