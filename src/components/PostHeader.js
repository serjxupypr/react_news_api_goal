import React from 'react';
import PostSearch from './search/PostsSearch';
import './PostHeader.css';

const PostHeader = () => (
  <div className="posts-header">
    <div className="search-header-title">Search some post...</div>
    <PostSearch/>
  </div>
);

export default PostHeader;