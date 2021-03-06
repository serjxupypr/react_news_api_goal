import { GET_SEARCH_POSTS, CLEAR_SEARCH_POSTS } from '../constants/actionTypes';

const initialState = [];

const getSearchPosts = (state = initialState, action) => {
  switch(action.type) {
    case GET_SEARCH_POSTS :
      return {
        ...state,
        posts: action.searchResults,
        noResults: action.searchResults !== undefined && action.searchResults.length === 0
      }

    case CLEAR_SEARCH_POSTS :
      return [];

    default : return state;
  }
}

export default getSearchPosts;