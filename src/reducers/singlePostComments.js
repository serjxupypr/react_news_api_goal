import { GET_POST_COMMENTS } from '../constants/actionTypes';

let initialState = [];

const singlePostComments = (state = initialState, action) => {
  switch(action.type) {
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }

    default:
      return state
  }
}

export default singlePostComments;