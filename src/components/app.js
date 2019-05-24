import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Stories from './Stories';
import SingleStoryLayout from './single-story/SingleStoryLayout'
import MainHeader from './main-header/MainHeader';
import { Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.fetchPosts('https://jsonplaceholder.typicode.com/posts');
  }

  render ()  {
   return (
    <div className="app">
      <MainHeader/>
      <Switch>
        <main id="main">
          {/* <Route path="/" component={Home}/> */}
          <Route path="/stories" exact component={Stories}/>
          <Route path="/stories/:storyId" exact component={SingleStoryLayout}/>
        </main>
      </Switch>
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