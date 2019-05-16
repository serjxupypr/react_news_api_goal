import { GET_SEARCH_POSTS } from '../constants/actionTypes';

const initialState = [];

const getSearchPosts = (state = initialState, action) => {
  switch(action.type) {
    case GET_SEARCH_POSTS :
      return {
        ...state,
        posts: action.searchResults
      }

    default : return state;
  }
}

export default getSearchPosts;