import { GET_POST_COMMENTS, CLEAR_POST_COMMENTS } from '../constants/actionTypes';
import { Comments } from '../api/comments/comments';

const getPostComments = url => async dispatch => {
  dispatch(clearComments());

  try {
    const response = await Comments.getPostComments(url);
    dispatch(postCommentsToStore(response));
  }

  catch (error) {
    console.warn('fetch comments failed!');
  }
}

const postCommentsToStore = (payload) => {
  return {
    type: GET_POST_COMMENTS,
    isLoading: false,
    comments: payload,
  }
};

const clearComments = () => {
  return {
    type: CLEAR_POST_COMMENTS,
    isLoading: true,
    comments: null,
  }
}

export default getPostComments;