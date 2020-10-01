import axios from 'axios';
// import { loadingReducer } from './Loading.js'


const initialState = {
    products:[],
    displayProducts: []
    
}

// TODO define reducer

export default (state = initialState, action) =>{
    
    
    const { type, payload } = action;

    switch(type) {
        case 'GET':
        
        return{...state, products: payload }

        case 'CHANGE':
            console.log(state, 'hshshshhs')
    let displayProducts = state.products.filter(product => {
        return product.category === payload;
    })
   
    return { ...state, displayProducts}
    default:
        return state;
    }   
   
}

export const getData = () =>{
    console.log('response  ')
    return async function (dispatch) {
      
        const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
        console.log(response, 'response  for products here')
        
        dispatch({ 
        type: "GET",
        payload: response.data.results
    })
  }
}



//   export const loadingReducer = (state = false, action) => {

//     if (action.type === 'LOADING') {
//       return action.payload === true;
//     }
  
//     return state;
//   }
  
//   const loading = (bool) => ({ type: 'LOADING', payload: bool })