import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStory  from './SingleStory';
import { fetchSinglePost, clearSinglePost } from '../../actions/singlePost';
import './singleStoryLayout.css';

let rootPostUrl = 'https://jsonplaceholder.typicode.com/posts/';

let renderContent;

class SingleStoryLayout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchSinglePost(rootPostUrl + this.props.match.params.storyId);
  }

  componentWillUnmount() {
    this.props.clearSinglePost();
  }

  render() {
    renderContent = (
      !this.props.store.singlePostState.post ? 
        <div className="single-story-loader">Loading...</div>
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