// import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    products: [],
    total: 0,
    
}

export default (state = initialState, action) =>{
    const { type, payload } = action;
    let total;
    let products;
    let id = Math.random();


    switch(type) {
        case 'ADD':
            console.log(payload)
            total = state.total + 1;
            products = state.products;
            products.push({product: payload, id: id});
            return {products, total}
        case 'DELETE':
            total = state.total -1;
            products = state.products.filter(item => item.id !== payload.id);
            console.log(products, "whats left");
            return {products, total}
    default:
        return state;
    }   
   
}



export const addToCart = (product) => {
    return async function( dispatch){
        product.inStock = product.inStock - 1 
    // console.log(product, 'product')
    const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
    console.log(response, 'results here')
    dispatch({
        type: 'ADD',
        payload: response.data,
      
    })
  };
}



// export const deleteFromCart = (product) => {
//     return async function( dispatch){
//         product.inStock = product.inStock +1;
//     // console.log(product, 'product')
//     const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
//     console.log(response, 'results here')
//     dispatch({
//         type: 'DELETE',
//         payload: response.data,
      
//     })
//   };
// }


export const deleteFromCart = (product) => {
    return {
        type: 'DELETE',
        payload: product,
    }
}

