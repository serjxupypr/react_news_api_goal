import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const links = [
  {
    to: '/',
    title: 'Home page',
    exact: true
  },
  {
    to: '/stories',
    title: 'Stories',
    exact: true
  }
]

const MainMenu = () => {
  const linkList = links.map((link, index) => {
    return (
      <li className="main-nav--list__item" key={index}>
        <NavLink 
          to={link.to}
          activeClassName={'active'}
          exact={link.exact}
        >
          {link.title}
        </NavLink>
      </li>
    )
  });

  return (
    <nav className="main-nav">
      <ul className="main-nav--list">
        {linkList}
      </ul>
    </nav>
  )
}

export default MainMenu;