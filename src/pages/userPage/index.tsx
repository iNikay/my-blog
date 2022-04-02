import React from 'react'
import { CreateArticle } from '../../components/createArticle';
import { FullArticle } from '../../components/fullArticle';
import { User } from '../../components/user';
import { UserArticels } from '../../components/userArticles';

import styles from './UserPage.module.scss';

export const UserPage = () => {
  return (
    <div className={styles.container}>
        {/* <User/> */}
        {/* <CreateArticle/> */}
        <FullArticle/>
        <UserArticels/>
    </div>
  )
}
