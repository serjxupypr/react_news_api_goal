import React from 'react';
import { Link } from 'react-router-dom';


const MainLogo = () => (
  <Link className="main-logo" to={'/'}>
    <img src="/assets/images/main-logo.png"/>
  </Link>
)

export default MainLogo;