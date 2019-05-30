import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Stories from './posts/Stories';
import SingleStoryLayout from './single-story/SingleStoryLayout'
import MainHeader from './main-header/MainHeader';
import Home from './home/Home';
import Footer from './footer/Footer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }

  render ()  {
   return (
    <div className="app">
      <MainHeader/>
      <Switch>
        <main id="main">
          <Route path="/" exact component={Home}/>
          <Route path="/stories" exact component={Stories}/>
          <Route path="/stories/:storyId" exact component={SingleStoryLayout}/>
        </main>
      </Switch>
      <Footer/>
    </div>
   )
  }
}

const mapStateToProps = (state) => ({
  store: state
  }
)

export default connect(
  mapStateToProps
)(App);