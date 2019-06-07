import { combineReducers } from 'redux';
import storyReducer from './story';
import singlePost from './singlePost';
import getSearchPosts from './postSearch';
import singlePostComments from './singlePostComments';


const rootReducer = combineReducers({
  storyState: storyReducer,
  searchPostsState: getSearchPosts,
  singlePostState: singlePost,
  singlePostComments: singlePostComments
});


export default rootReducer;