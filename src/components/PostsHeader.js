import React from 'react';
import PostSearch from './search/PostsSearch';
import './PostsHeader.css';

const PostsHeader = () => (
  <div className="posts-header">
    <div className="search-header-title">Search some post...</div>
    <PostSearch/>
  </div>
);

export default PostsHeader;