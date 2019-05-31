import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import LastViewedPosts from '../lastViewedPosts/LastViewedPosts';
import './home.css';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Puzzzle - Home</title>
    </Helmet>
    <div className="home-intro">
      <div className="container">
        <h1 className="home-intro-title">Welcome to Puzzle!</h1>
        <div className="home-intro-text">Prepare uranus!</div>
        <div className="home-intro-links">
          <Link className="btn-extra" to="/stories">assemble puzzle!</Link>
        </div>
      </div>
    </div>
    <LastViewedPosts/>
  </Fragment>
);

export default Home;