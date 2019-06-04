import getData from '../api/api';
import { GET_POST_COMMENTS } from '../constants/actionTypes';

const getPostComments = url => dispatch => {
  getData(url)
    .then(response => response.json())
    .then(response => {
      if(response.length) {
        dispatch(postCommentsToStore(response));
      }
    });
}

const postCommentsToStore = (payload) => ({
  type: GET_POST_COMMENTS,
  comments: payload,
});

export default getPostComments;