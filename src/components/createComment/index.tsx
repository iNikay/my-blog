import React from 'react';

import styles from './CreateComment.module.scss';

export const CreateComment = () => {
  return (
   <div className={styles.createCommentWrapper}>
     <div className={styles.title}>Добавить комментарий</div>
     <textarea name="text" ></textarea>
     <button>Отправить</button>
   </div>
  );
};
