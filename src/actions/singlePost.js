import { GET_SINGLE_STORY_LOAD } from '../constants/actionTypes';
import { GET_SINGLE_STORY_SUCCESS } from '../constants/actionTypes';
import { GET_SINGLE_STORY_FAIL } from '../constants/actionTypes';
import { SINGLE_STORY_CLEAR } from '../constants/actionTypes';
import getPosts from '../api/api'

const fetchSinglePost = url => dispatch => {
  dispatch({
    type: GET_SINGLE_STORY_LOAD
  });

  getPosts(url)
    .then(response => response.json())
    .then(response => {
      if(response) {
        dispatch(fetchSinglePostSuccess(response));
      } else {
        dispatch(fetchSinglePostError('failed'));
      }
    })
}

const fetchSinglePostSuccess = payload  => ({
  type: GET_SINGLE_STORY_SUCCESS,
  payload,
});

const fetchSinglePostError = payload  => ({
  type: GET_SINGLE_STORY_FAIL,
  payload,
});

const clearSinglePost = () => ({
  type: SINGLE_STORY_CLEAR,
})

export {
  fetchSinglePost,
  clearSinglePost,
};