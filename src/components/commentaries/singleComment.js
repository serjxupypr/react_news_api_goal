import React from 'react';
import './single-comment.css';
import PropTypes from 'prop-types';

const SingleComment = ({postComment}) => {

  return (
    <div className="comment-item">
      <div className="img-holder">
        <img className="comment-author-photo" src="/assets/images/arni.png"/>
      </div>
      <div className="comment-info-holder">
        <div className="comment-author-info">
          <div className="comment-author">{postComment.name}</div>
          <div className="comment-email">
            <a href={`mailto:${postComment.email}`}>{postComment.email}</a>
          </div>
        </div>
        <div className="comment-message">
          <p>{postComment.body}</p>
        </div>
      </div>
    </div>
  )
}

SingleComment.propTypes = {
  postComment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  })
}

export default SingleComment;