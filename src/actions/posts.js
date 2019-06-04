import { GET_ALL_STORIES_SUCCESS } from '../constants/actionTypes';
import { CLEAR_ALL_STORIES } from '../constants/actionTypes';
import { GET_ALL_STORIES_FAIL } from '../constants/actionTypes';
import { GET_ALL_STORIES_LOAD } from '../constants/actionTypes';
import getData from '../api/api';

const fetchPosts = url => dispatch => {
  dispatch({
    type: GET_ALL_STORIES_LOAD
  });

  getData(url)
  .then(response => response.json())
  .then(response => {
    if(response.length) {
      dispatch(fetchPostsSuccess(response));
    } else {
      dispatch(fetchPostsFail('failed'));
    }
  });
};

const fetchPostsSuccess = payload =>({
  type: GET_ALL_STORIES_SUCCESS,
  payload,
});

const fetchPostsFail = payload => ({
  type: GET_ALL_STORIES_FAIL,
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