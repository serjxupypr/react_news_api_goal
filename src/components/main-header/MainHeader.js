import React from 'react';
import MainMenu from './MainMenu';
import MainLogo from './MainLogo';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container">
        <MainLogo/>
        <MainMenu/>
      </div>
    </header>
  )
}

export default MainHeader;