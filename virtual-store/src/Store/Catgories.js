import axios from 'axios';

const initialState = {
    categories:[],
    activeCategory: '',
}

export default (state = initialState, action) => {

    let { type, payload } = action;

  
    switch (type) {

    case 'UPDATE_CATEGORIES':

    return {...state, categories: payload}

    case 'CHANGE':
  
    let activeCategory = payload;
    let categories = state.categories;
    let obj = { activeCategory , categories };
    return obj;
  
    default:
      return state;
    }
  };

  export const change = (category) => {
    return {
      type: 'CHANGE',
      payload: category,
    };
  };


 export function getCategories(){
    return async function( dispatch){
      const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
      // console.log(response, 'results here')
      dispatch({
        type: 'UPDATE_CATEGORIES',
        payload: response.data.results
      })
    }
  }

