const initialState = {
    categories:[
        {normalizedName: 'electronics', displayName:'categ  name', description: 'electronics '},
        {normalizedName: 'food', displayName:'categ name', description: 'description',},
        {normalizedName: 'accessories', displayName:'product name', description: 'description'},
        {normalizedName: 'books', displayName:'categ name', description: 'categ'},
    ],
    activeCategory: null,
}

export default (state = initialState, action) => {

    let { type, payload } = action;

  
    switch (type) {
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