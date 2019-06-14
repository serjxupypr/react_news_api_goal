import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Commentaries from '../../containers/Commentaries';
import setLastViewedPosts from './setLastViewedPosts';
import './singleStory.css';

const SingleStory = ({ postData }) => {

  setLastViewedPosts(postData);

  return (
    <Fragment>
      <Helmet>
        <title>Puzzzle - {postData.title}</title>
        <meta name="description" content={postData.title + " description"} />
      </Helmet>
      <div className="single-story">
        <header className="single-story-header">
          <div className="img-holder">
            <img src="/assets/images/post-image.jpg" alt="site logo"/>
          </div>
          <div className="text-holder">
            <h2 className="single-story__title">
              {postData.title}
            </h2>
            <div className="story-details">
              <span>Author: </span>
              <span>John Doe</span>
            </div>
          </div>
        </header>
        {<div className="single-story-text-box">
          <p>
            {postData.body}
          </p>
        </div>}
        <div >
          <Commentaries postId={postData.id}/>
        </div>
      </div>
    </Fragment>
  )
}

export default SingleStory;