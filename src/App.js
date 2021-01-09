import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import SignInScreen from './Screen/SignInScreen';
import {signOut} from './Actions/UserActions'
import RegisterScreen from './Screen/RegisterScreen';
import ShippingAddressScreen from './Screen/ShippingAddressScreen';




function App() {

  const cart =useSelector(state=>state.cart);
  const {cartItems } =cart;
  const userSignIn =useSelector(state=>state.userSignIn);
  const {userInfo}=userSignIn;
  const dispatch = useDispatch()

    const signOutHandler =()=>
    {
             dispatch(signOut())
    }

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

        {
          userInfo?(
            <div className='dropdown'>
            <Link to='#'>
              {userInfo.name} <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <Link to='#signout' onClick={signOutHandler}>Sign Out</Link>
            </ul>
             </div> 
          ):(
            
            <Link to="/signin">Sign In</Link>
          )
        }
      </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route exact path='/' component={HomeScreen}></Route>
      <Route path='/signin' component={SignInScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/shipping' component={ShippingAddressScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter> 
         
        
             
  );
}

export default App;
