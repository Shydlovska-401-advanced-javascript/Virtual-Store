const initialState = {
    products:[
        {category: 'electronics', name:'TV', description: 'electronics description', price: '$10', count: 20},
        {category: 'food', name:'apple', description: 'food description', price: '$3', count: 25},
        {category: 'accessories', name:'ring', description: 'accessories description', price: '$5', count: 2},
        {category: 'accessories', name:'noise', description: 'accessories description', price: '$5', count: 2},
        {category: 'accessories', name:'stuff', description: 'accessories description', price: '$5', count: 2},
        {category: 'books', name:'kozak', description: 'books', price: '$1', count: 6},
    ],
    displayProducts: []
    
}

// TODO define reducer

export default (state = initialState, action) =>{
    
    
    const { type, payload } = action;

    switch(type) {
        case 'CHANGE':
    let displayProducts = state.products.filter(product => {
        return product.category === payload;
    })
    // console.log(displayProducts, "added product")
    return { ...state, displayProducts}
    default:
        return state;
    }   
   
}