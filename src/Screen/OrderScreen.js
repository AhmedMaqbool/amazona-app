import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import data from '../data';
import {Link} from 'react-router-dom';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import {detailsOrder} from '../Actions/OrderActions'
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';

const OrderScreen = (props) => {
    
     const dispatch = useDispatch()
     const [sdkReady,setSdkReady]=useState(false)
     

    const orderId=props.match.params.id
    const orderDeatils = useSelector(state => state.orderDeatils)
    const {order,loading,error}=orderDeatils;

     
             useEffect(()=>{
             const addPayPalScript= async()=>
             {
                  const {data}=await axios.get('/api/config/paypal');
                  const script =document.createElement('script')
                  script.type='text/javascript';
                  script.src=`https://www.paypal.com/sdk/js?client-id=${data}`
                  script.async=true;
                  script.onload=()=>{
                    setSdkReady(true)
                  }

                  document.body.appendChild(script)

            }

            if(!order._id)
            {
              dispatch(detailsOrder(orderId))

            }else
            {
               if(!order.isPaid)
               {
                 if(!window.paypal)
                 {
                   addPayPalScript();
                 }
                 else
                 {
                   setSdkReady(true)
                 }
               }
            }
              
          },[dispatch,orderId,order._id,order.isPaid,sdkReady])

             const successPaymentHandler=()=>{
              //  Todo dispatch pay order
             }
    
      return loading? (<LoadingBox></LoadingBox>):error?<MessageBox variant='danger'>{error}</MessageBox>: (
        <div>
          <h1>Order {order._id}</h1>
            <div className='row top'>
                <div className="col-2">
              <ul>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Name:</strong>{order.shippingAddress.fullName} <br/>
                            <strong>Addres:</strong>{order.shippingAddress.address},
                            {order.shippingAddress.city},
                            {order.shippingAddress.postalCode},
                            {order.shippingAddress.country},
                    ,

                        </p>
                        {order.isDelivered?<MessageBox variant='success'>Delivered At {order.DeliveredAt}</MessageBox>
                        :(<MessageBox variant='danger' >Not Delivered</MessageBox>)
 
                            }
                      </div>
                  </li>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Payment</h2>
                        <p>
                            <strong>Metod:</strong>{order.paymentMethod}
                        </p>
                        {order.isPaid?<MessageBox variant='success'>Paid At {order.paidAt}</MessageBox>
                        :(<MessageBox variant='danger' >Not Paid</MessageBox>)
 
                            }
                      </div>
                  </li>
                  <li>
                      <div className='cart cart-body'>
                        <h2>Order Items</h2>
                        <ul>
            {order.map((item) => (
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
                                  <div>${order.itemsPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div>Shipping</div>
                                  <div>${order.shippingPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div>Tax</div>
                                  <div>${order.taxPrice}</div>
                               </div>
                           </li>
                           <li>
                               <div className='row'>
                                  <div> <strong>Order Total</strong> </div>
                                  <div><strong>${order.totalPrice}</strong></div>
                               </div>
                           </li>
                           {
                             !order.isPaid&& (
                                  <li>
                                    (!sdkReady?(<LoadingBox></LoadingBox>)):
                                    (<PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} ></PayPalButton>)
                                  </li>

                             )
                           }
                           
                       </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderScreen
