import React from 'react';

import styles from './CommentArticle.module.scss';

export const CommentArticle = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentInfo}>
        <div className={styles.fullName}>Vasya Pupkin</div>
        <div className={styles.commentDate}>12 августа 2019 в 08:06</div>
      </div>
      <div className={styles.commentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed
        neque, diam nibh.
      </div>
    </div>
  );
};
