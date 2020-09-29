import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './Products.js'; // import reducers
import categories from './Catgories.js'


let reducers = combineReducers({ products, categories }); // combine your particular reducers

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();