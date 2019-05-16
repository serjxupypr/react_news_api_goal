import React from 'react';
import { connect } from 'react-redux';
import './stories.css';
import Story from './Story';

const Stories = ({store}) => {
  return (
    <div className="stories-card-holder">
      { 
        ((store.searchPostsState.length != 0 ?
          store.searchPostsState.posts :
          store.storyState.posts || []).map(story => {
          return (
            <Story 
              key={story.id}
              story={story}
            />
          )
        }))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  store: state,
});

export default connect(
  mapStateToProps
)(Stories);
