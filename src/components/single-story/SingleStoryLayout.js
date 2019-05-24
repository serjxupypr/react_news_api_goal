import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStory  from './SingleStory';
import fetchSinglePost from '../../actions/singlePost';
import './singleStoryLayout.css';

let rootPostUrl = 'https://jsonplaceholder.typicode.com/posts/';

let renderContent;

class SingleStoryLayout extends Component {
  constructor() {
    super();
  }

  componentWillUpdate() {
    renderContent = <div className="single-story-loader">Loading...</div>;
  }

  componentDidMount() {
    this.props.fetchSinglePost(rootPostUrl + this.props.match.params.storyId);
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
}

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(SingleStoryLayout);