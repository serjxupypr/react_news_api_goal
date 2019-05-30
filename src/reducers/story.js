import { GET_ALL_STORIES_SUCCESS } from '../constants/actionTypes';
import { GET_ALL_STORIES_FAIL } from '../constants/actionTypes';
import { GET_ALL_STORIES_LOAD } from '../constants/actionTypes';
import { CLEAR_ALL_STORIES } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  posts: null,
  error: null
}

const storyReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_STORIES_LOAD : 
      return {
        ...state,
        isLoading: true
      }
    
    case GET_ALL_STORIES_SUCCESS : 
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      }

    case GET_ALL_STORIES_FAIL : 
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case CLEAR_ALL_STORIES : 
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      }

    default: return state;
  }
}

export default storyReducer;