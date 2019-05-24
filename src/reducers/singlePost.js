import { GET_SINGLE_STORY_LOAD } from '../constants/actionTypes';
import { GET_SINGLE_STORY_SUCCESS } from '../constants/actionTypes';
import { GET_SINGLE_STORY_FAIL } from '../constants/actionTypes';

const initialState = []

const singlePost = (state = initialState, action) => {
  switch(action.type) {
    case GET_SINGLE_STORY_LOAD :
      return (
        {
          ...state,
          loading: true
        }
      )
      
    case GET_SINGLE_STORY_SUCCESS :
      return (
        {
          ...state,
          loading: false,
          post: action.payload
        }
      )

    case GET_SINGLE_STORY_FAIL :
        return (
          {
            ...state,
            loading: false,
            payload: action.payload
          }
        )

    default :
     return state;
  }
}

export default singlePost;