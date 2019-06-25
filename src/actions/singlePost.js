import { GET_SINGLE_STORY_LOAD } from '../constants/actionTypes';
import { GET_SINGLE_STORY_SUCCESS } from '../constants/actionTypes';
import { GET_SINGLE_STORY_FAIL } from '../constants/actionTypes';
import { SINGLE_STORY_CLEAR } from '../constants/actionTypes';
import { Posts } from '../api/posts/posts';

const fetchSinglePost = url => async dispatch => {
  dispatch({
    type: GET_SINGLE_STORY_LOAD
  });

  try {
    const response = await Posts.getSinglePost(url);
    dispatch(fetchSinglePostSuccess(response));
  }

  catch (error) {
    console.warn('fetch singlePost data failed!');
  }

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