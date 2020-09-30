import React from 'react';
import Header from '../src/Components/Header.js'
import Footer from '../src/Components/Footer.js'
import Categories from '../src/Components/Categories.js'
import Products from '../src/Components/Products.js'
import SimpleCart from '../src/Components/SimpleCart.js'



function App() {
  return (
  <>
  <Header />
   <Categories /> 
   <Products /> 
   <SimpleCart />
  <Footer />
  </>
  );
}

export default App;
