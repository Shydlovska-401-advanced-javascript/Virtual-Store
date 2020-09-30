import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './Products.js'; // import reducers
import categories from './Catgories.js'
import cart from './SimpleCart.js'


let reducers = combineReducers({ products, categories, cart }); // combine your particular reducers

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();