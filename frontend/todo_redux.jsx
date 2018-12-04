import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {receiveTodo} from './actions/todo_actions';
import configureStore from './store/store';

function Root() {
  return(
    <h1>Yo</h1>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  ReactDOM.render(< App store={store} />, document.getElementById('root'));
  // ReactDOM.render(< Root store={store} />, document.getElementById('root'));
});
