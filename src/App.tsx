import React from 'react';
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
        <Home />
      </div>
    </div>
  );
};
export default App;
