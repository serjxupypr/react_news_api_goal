import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store'; 
import { getReadableStories } from './selectors/story';

console.log('main index js store', store.getState());

ReactDOM.render(
  // <App stories={getReadableStories(store.getState())} onArchive={ id => store.dispatch({ type: STORY_ARCHIVE, id })}/>,
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
