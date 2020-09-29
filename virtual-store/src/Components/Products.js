import React from 'react';
import { connect } from 'react-redux';

 function Products(props){
    // console.log(props, "products!!!!!!!!S");
    return (
   <section>
       <ul>
       {props.activeCategory ? props.displayProducts.map(product =>
                <li>{product.name}, {product.price}, {product.count}</li> ) : props.allProducts.map(product =>
                    <li>{product.name}</li> )}
           
       </ul>
   </section>
    )
}



const mapStateToPops = (state) => {
    console.log(state, "state");
    return{
      activeCategory: state.categories.activeCategory,
      displayProducts: state.products.displayProducts,
      allProducts: state.products.products
    }
}


export default connect(mapStateToPops)(Products);