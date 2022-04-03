import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateArticle } from './components/createArticle';
import { Header } from './components/header/index';
import { Menu } from './components/menu';
import { ModalWindow } from './components/modalWindow';
import { User } from './components/user';
import { Home } from './pages/home';
import { UserPage } from './pages/userPage';

const App = () => {
  return (
    <div className="app">
      {/* <ModalWindow /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:page" element={<UserPage />} />
        </Routes>
        <Menu />
      </div>
    </div>
  );
};
export default App;
