import React from 'react';
import { ArticleMainPage } from '../../components/articleMainPage';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { ModalWindow } from '../../components/modalWindow';

import styles from './Home.module.scss';

export const Home = () => {
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <Menu />
      <div className={styles.container}>
        <ArticleMainPage />
        <ArticleMainPage />
        <ArticleMainPage />
        <ArticleMainPage />
      </div>
    </div>
  );
};
