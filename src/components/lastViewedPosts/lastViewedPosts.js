import React from 'react';
// import LastSinglePost from './LastSinglePost';
let storage = window.localStorage;

console.log(storage);

const LastViewedPosts = () => (
  storage.puzzle != undefined ?
  <div>There are some posts</div> :
  <div>There are no any posts</div>
);

export default LastViewedPosts;

