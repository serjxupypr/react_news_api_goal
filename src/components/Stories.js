import React from 'react';
import { connect } from 'react-redux';
import './stories.css';
import Story from './Story';
import PostsHeader from '../components/PostsHeader';

const Stories = ({store}) => {
  return (
    <div className="stories-section">
      <div className="container">
        <PostsHeader/>
        <div className="stories-card-holder">
          { !store.searchPostsState.noResults ? 
            // check search existence and return content depends on it
            ((store.searchPostsState.length != 0 ?
              store.searchPostsState.posts :
              store.storyState.posts || []).map(story => {
              return (
                <Story
                  key={story.id}
                  story={story}
                />
              )
            })) :
            (<div className="no-results">Items were not found...</div>)
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  store: state,
});

export default connect(
  mapStateToProps
)(Stories);
