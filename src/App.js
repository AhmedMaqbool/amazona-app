import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';




function App() {

  const cart =useSelector(state=>state.cart);
  const {cartItems } =cart;
 

  return (
    <BrowserRouter>
    <div className="grid-container"> 
    <header className="row">
      <div>
        <Link className="brand" to="/">amazona</Link>
      </div>
      <div>
        <Link to="/cart">Cart{
          cartItems.length>0 && (<span className='badge'>{cartItems.length}</span>)
        }</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route exact path='/' component={HomeScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter> 
         
        
             
  );
}

export default App;
