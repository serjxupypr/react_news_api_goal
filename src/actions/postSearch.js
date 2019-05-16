import { GET_SEARCH_POSTS } from '../constants/actionTypes';

const postSearch = (searchResults) => (
  {
    type: GET_SEARCH_POSTS,
    searchResults,
  }
);

export default postSearch;