import { combineReducers } from 'redux';
import storyReducer from './story';
import getSearchPosts from './postSearch';

const rootReducer = combineReducers({
  storyState: storyReducer,
  searchPostsState: getSearchPosts,
});


export default rootReducer;