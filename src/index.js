import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './main.sass';
import App from './App';
import { Provider } from 'mobx-react';
import Store from './store';

const Root = (
  <Provider Store={Store}>
    <App />
  </Provider>
);


ReactDOM.render(Root, document.getElementById('root'));
