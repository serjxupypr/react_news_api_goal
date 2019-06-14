import getData from '../api/api';
import { GET_POST_COMMENTS, CLEAR_POST_COMMENTS } from '../constants/actionTypes';

const getPostComments = url => dispatch => {
  dispatch(clearComments());

  getData(url)
    .then(response => response.json())
    .then(response => {
      if(response) {
        dispatch(postCommentsToStore(response));
      }
    });
}

const postCommentsToStore = (payload) => {
  return {
    type: GET_POST_COMMENTS,
    isLoading: false,
    comments: payload,
  }
};

const clearComments = () => {
  console.log('azazazas');
  return {
    type: CLEAR_POST_COMMENTS,
    isLoading: true,
    comments: null,
  }
}

export default getPostComments;