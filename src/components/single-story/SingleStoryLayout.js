import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStory  from './SingleStory';
import { fetchSinglePost, clearSinglePost } from '../../actions/singlePost';
import './singleStoryLayout.css';
import Loader from '../loader/Loader'
import { ALL_POSTS_URL } from '../../constants/urlsToData';

let rootPostUrl = ALL_POSTS_URL;

let renderContent;

class SingleStoryLayout extends Component {

  getPostUrl() {
    let postUrl = rootPostUrl + this.props.match.params.storyId;
    return postUrl;
  }

  componentDidMount() {
    this.props.fetchSinglePost(this.getPostUrl());
  }

  componentWillUnmount() {
    this.props.clearSinglePost();
  }

  render() {

    renderContent = (
      !this.props.store.singlePostState.post ? 
        <Loader/>
       :
        <SingleStory postData={this.props.store.singlePostState.post}/>
    )

    return (
      <div className="single-story-holder">
        <div className="container">
          {renderContent}
        </div>
      </div>
    )
  }
}

const MapStateToProps = store => ({
  store,
});

const mapDispatchToProps = {
  fetchSinglePost,
  clearSinglePost,
}

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(SingleStoryLayout);