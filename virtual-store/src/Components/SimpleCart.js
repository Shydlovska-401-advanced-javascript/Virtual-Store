import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../Store/SimpleCart.js'
import Button from '@material-ui/core/Button';

 function SimpleCart(props){
    // console.log(props, 'cart')
    return (
        <>
        <Button size="small" color="primary" >
            Cart: {props.total}
        </Button>
        <ul>
        {props.products.map(product => <li >{product.product.name} <span onClick={(()=>props.deleteFromCart(product) )}> x</span></li>)}
        </ul>
        </>
    )
}

const mapDispatchToProps = {
    deleteFromCart
  }

const mapStateToPops = (state) => {
    console.log(state, "cart");
    return{
      total: state.cart.total,
      products: state.cart.products,


    }
}


export default connect(mapStateToPops, mapDispatchToProps)(SimpleCart);