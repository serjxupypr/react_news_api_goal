import { GET_ALL_STORIES_SUCCESS } from '../constants/actionTypes';
import { CLEAR_ALL_STORIES } from '../constants/actionTypes';
import { GET_ALL_STORIES_LOAD } from '../constants/actionTypes';
import { Posts } from '../api/posts/posts';

const fetchPosts = url => async dispatch => {
  dispatch({
    type: GET_ALL_STORIES_LOAD
  });

  try {
    const response = await Posts.getAllPosts(url);
    dispatch(fetchPostsSuccess(response));
  }

  catch (error) {
    console.warn('fetch posts data failed!');
  }
};

const fetchPostsSuccess = payload =>({
  type: GET_ALL_STORIES_SUCCESS,
  payload,
});

const postsLoadStart = () => ({
  type: GET_ALL_STORIES_LOAD
});

const clearStories = payload => ({
  type: CLEAR_ALL_STORIES,
  payload,
});

export {
  fetchPosts,
  clearStories,
  postsLoadStart,
}