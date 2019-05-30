import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
