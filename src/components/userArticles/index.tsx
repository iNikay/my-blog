import React from 'react';

import { ArrowBack, ArrowForward } from '@mui/icons-material/';

import { ArticlePreview } from '../articlePreview';
import { Header } from '../header';
import styles from './UserArticles.module.scss';

export const UserArticels = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.articlesWrapper}>
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
      <div className={styles.paginationControls}>
        <div className={styles.arrowsBlock}>
          <button>
            <ArrowBack />
          </button>
          <button>
            <ArrowForward />
          </button>
        </div>
        <div className={styles.paginationCount}>Страница 1 из 10</div>
      </div>
    </div>
  );
};
