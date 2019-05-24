import { combineReducers } from 'redux';
import storyReducer from './story';
import singlePost from './singlePost';
import getSearchPosts from './postSearch';


const rootReducer = combineReducers({
  storyState: storyReducer,
  searchPostsState: getSearchPosts,
  singlePostState: singlePost
});


export default rootReducer;