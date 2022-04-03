import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CreateArticle } from '../../components/createArticle';
import { FullArticle } from '../../components/fullArticle';
import { User } from '../../components/user';
import { UserArticels } from '../../components/userArticles';

import styles from './UserPage.module.scss';

export const UserPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className={styles.container}>
      {params.page === 'userinfo' && <User />}
      {params.page === 'createarticle' && <CreateArticle />}
      {params.page === 'fullarticle' && <FullArticle />}

      <UserArticels />
    </div>
  );
};
