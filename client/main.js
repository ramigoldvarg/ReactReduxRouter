import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer_root.js';
import Counter from './containers/counter.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <Counter />
    </ Provider>,
    document.getElementById('root')
  );
});