import React from 'react';
import { connect } from 'react-redux';
import postSearch from '../../../actions/postSearch';
import './PostSearch.css';

const goSearch = (allPosts ,inputValue) => (
  allPosts.filter((postItem) => {
    return postItem.title.indexOf(inputValue) !== -1;
  })
);

const PostSearch = ({store, dispatch}) => (
  <div className="post-search-holder">
    <form onSubmit={(e) =>{e.preventDefault()}}>
      <input
        type="text"
        onChange={(e)=>{
          dispatch(postSearch(goSearch(store.storyState.posts, e.target.value)));
        }}
      />
    </form>
  </div>
);

const mapStateToProps = (store) => ({
  store,
})

export default connect(mapStateToProps)(PostSearch);