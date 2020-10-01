import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import axios from 'axios';
import products from './Products.js'; // import reducers
import categories from './Catgories.js'
import cart from './SimpleCart.js'
// import loadingReducer from './Loading.js'



let reducers = combineReducers({ products, categories, cart  }); // combine your particular reducers

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();