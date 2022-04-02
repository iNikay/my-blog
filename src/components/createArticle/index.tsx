import React from 'react';

import styles from './CreateArticle.module.scss';

export const CreateArticle = () => {
  return (
    <div className={styles.createArticle}>
      <div className={styles.title}>
        <input type="text" name="title" placeholder="Введите заголовок..." />
      </div>
      <div className={styles.description}>
        <span>Короткое описание</span>
        <textarea name="description" />
      </div>
      <div className={styles.image}>
        <span>Ссылка на изображение:</span>
        <input type="text" name="image" />
        {/* <input type="file" /> */}
      </div>
      <div className={styles.text}>
        <span>Полное описание</span>
        <textarea name="text"/>
      </div>
      <div className={styles.btnBlock}>
        <button>Опубликовать</button>
        {/* <button>Опубликовать</button> */}
      </div>
    </div>
  );
};
