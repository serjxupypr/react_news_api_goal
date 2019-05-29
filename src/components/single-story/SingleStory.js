import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const SingleStory = ({ postData }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Puzzzle - {postData.title}</title>
      </Helmet>
      <div className="single-story">
        <h2 className="single-story__title">
          {postData.title}
        </h2>
        <div className="story-details">
          <span>Author id: </span>
          <span>{postData.userId}</span>
        </div>
        <div className="story-id">
          <span>Post id: </span>
          <span>{postData.id}</span>
        </div>
        <div className="text-box">
          <p>
            {postData.body}
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default SingleStory;