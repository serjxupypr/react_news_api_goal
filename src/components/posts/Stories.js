import React, { Component } from 'react';
import { connect } from 'react-redux';
import './stories.css';
import Story from './Story';
import PostsHeader from './PostsHeader';
import Loader from '../loader/Loader'
import { fetchPosts, postsLoadStart } from '../../actions/posts';
import { clearSearch } from '../../actions/postSearch';
import Helmet from 'react-helmet';
import { ALL_POSTS_URL } from '../../constants/urlsToData';
import PropTypes from 'prop-types';

class Stories extends Component {

  componentWillMount() {
    this.props.clearSearch();
  }

  componentDidMount() {
    this.props.postsLoadStart();
    this.props.fetchPosts(ALL_POSTS_URL);
  }

  render() {
    return (
      <div className="stories-section">
        <Helmet>
          <title>Puzzzle - Stories</title>
          <meta name="description" content="stories description" />
        </Helmet>
        <div className="container">
          <PostsHeader/>
          <div className="stories-card-holder">
            { this.props.store.storyState.isLoading ? 
              <Loader/> : 
              !this.props.store.searchPostsState.noResults ? 
              // check search existence and return content depends on it
              ((this.props.store.searchPostsState.length !== 0 ?
                this.props.store.searchPostsState.posts :
                this.props.store.storyState.posts || []).map(story => {
                return (
                  <Story
                    key={story.id}
                    storyId={story.id}
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
}

Stories.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  postsLoadStart: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = {
  fetchPosts,
  postsLoadStart,
  clearSearch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
