import React from 'react';
import { CommentArticle } from '../commentArticle';
import { CreateComment } from '../createComment';

import styles from './CommentsArticle.module.scss';

export const CommentsArticle = () => {
  return (
    <div className={styles.commentsWrapper}>
      <div className={styles.title}>Комментарии(3)</div>
      <div className={styles.commentsBlock}>
       <CommentArticle/>
       <CommentArticle/>
       <CommentArticle/>
       <CommentArticle/>
      </div> 
      <CreateComment/>
    </div>
  );
};
