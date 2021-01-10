import React from 'react'
import { useSelector } from 'react-redux'
import CheckOutSteps from '../Components/CheckOutSteps'
import data from '../data';
import {Link} from 'react-router-dom';

const PlaceOrderScreen = (props) => {
    
     const cart =useSelector(state=>state.cart)
     if(!cart.paymentMethod)
     {
         props.history.push('/payment');
     } 

     const toPrice=(num)=>
     {
           Number(num.toFixed(2))    
     }
    cart.itemsPrice=toPrice(cart.cartItems.reduce((a,c)=>a+c.qty*c.price,0))
    cart.shippingPrice=cart.itemsPrice>100?toPrice(0):toPrice(10)
    cart.taxPrice=toPrice(0.15*cart.itemsPrice)
    cart.totalPrice=cart.itemsPrice+cart.shippingPrice+cart.taxPrice;
    
const placeOrderHandler=()=>
{

}


    return (
        <div>
            <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
            <div className='row top'>
                <div className="col-2">
              <ul>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Name:</strong>{cart.shippingAddress.fullName} <br/>
                            <strong>Addres:</strong>{cart.shippingAddress.address},
                            {cart.shippingAddress.city},
                            {cart.shippingAddress.postalCode},
                            {cart.shippingAddress.country},
                    ,

                        </p>
                      </div>
                  </li>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Payment</h2>
                        <p>
                            <strong>Metod:</strong>{cart.paymentMethod}
                        </p>
                      </div>
                  </li>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Order Items</h2>
                        <ul>
            {cart.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={data.product[1].image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  
                  <div>{item.qty} x ${item.price}=${item.qty*item.price}</div>
                
                </div>
              </li>
            ))}
          </ul>
                      </div>
                  </li>
              </ul>

                </div>
                <div className="col-1">
                    <div className='cart card-body'>
                       <ul>
                           <li>
                               <h2>Order Summary</h2>
                           </li>
                           <li>
                               <div className='row'>
                                  <div>Items</div>
                                  <div>${cart.itemsPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div>Shipping</div>
                                  <div>${cart.shippingPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div>Tax</div>
                                  <div>${cart.taxPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div> <strong>Order Total</strong> </div>
                                  <div><strong>${cart.totalPrice}</strong></div>
                               </div>
                           </li>
                           <li>
                             <button type='button' disabled={cart.cartItems.length===0} className='primary block' onClick={placeOrderHandler} ></button>  
                           </li>
                       </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrderScreen
