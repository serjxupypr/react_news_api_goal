import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Stories from './Stories';
import PostHeader from './PostHeader';
import { fetchPosts } from '../actions/posts';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render ()  {
   return (
    <div className="app">
      <PostHeader/>
      <Stories/>
    </div>
   )
  }
}

const mapStateToProps = (state) => ({
  store: state
  }
)

const mapDispatchToProps = {
  fetchPosts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);