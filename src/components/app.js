import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Stories from './Stories';
import MainHeader from './main-header/MainHeader';
import { Route, Switch } from 'react-router-dom';
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
      <MainHeader/>
      <Switch>
        {/* <Route path="/" component={Home}/> */}
        <Route path="/stories" component={Stories}/>
        {/* <Route path="/story/:id" component={SingleStory}/> */}
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