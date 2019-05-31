import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import './singleStory.css'

let storage = window.localStorage;

let viewedPosts = !storage.viewedPosts ? [] : JSON.parse(storage.getItem('viewedPosts'));

const isPostExist = (postData) => {
  let match = 0;

  viewedPosts.map((post) => {
    if ( post.pagePath === `/stories/${postData.id}` ) {
    
      match +=1;
    }
  });

  return match > 0 ? true: false;
}

const SingleStory = ({ postData }) => {

  if(!isPostExist(postData)) {
    
    if ( !viewedPosts.length || viewedPosts.length < 4 ) {
      viewedPosts.push({
        title: postData.title,
        userId: postData.userId,
        pagePath: `/stories/${postData.id}`,
      });
    } else {
      viewedPosts.pop();
      viewedPosts.unshift({
        title: postData.title,
        userId: postData.userId,
        pagePath: `/stories/${postData.id}`,
      });
    }

    storage.setItem('viewedPosts', JSON.stringify(viewedPosts));
  };

  return (
    <Fragment>
      <Helmet>
        <title>Puzzzle - {postData.title}</title>
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
        <div className="single-story-text-box">
          <p>
            {postData.body}
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default SingleStory;