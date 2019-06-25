import React, { Component } from 'react';
import SingleComment from './singleComment';
import LoaderHoc from '../../hoc/loaderHoc';
import { SINGLE_POST_COMMENTS_URL } from '../../constants/urlsToData';
import PropTypes from 'prop-types';
import './commentaries.css';


class Commentaries extends Component {

  componentDidMount() {
    this.props.getPostComments(`${SINGLE_POST_COMMENTS_URL}${this.props.postId}`);
  }

  render() {
    let content = !this.props.store.singlePostComments.comments ? 
      <div>No comments yet...</div>
      :
      <div className="commentaries-holder">
        <div className="commentaries-header">
          <h3 className="commentaries-title">Post commentaries: </h3>
        </div>
        <div className="commentaries-grid">
          {
            this.props.store.singlePostComments.comments.map(item => 
              (
              <SingleComment key={item.id} postComment={item}/>
              )
            )
          }
        </div>
      </div>

    return (
      <LoaderHoc isLoading={this.props.store.singlePostComments.isLoading} children={content} />
    )
  }
}

Commentaries.propTypes = {
  getPostComments: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
  store: PropTypes.object.isRequired
}

export default Commentaries;