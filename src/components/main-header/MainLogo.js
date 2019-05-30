import React from 'react';
import { Link } from 'react-router-dom';


const MainLogo = () => (
  <Link className="main-logo" to={'/'} title="home page">
    <img src="/assets/images/main-logo.png" alt="site logo"/>
  </Link>
)

export default MainLogo;