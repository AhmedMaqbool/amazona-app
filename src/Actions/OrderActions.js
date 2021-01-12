import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../Constants/OrderConstants"
import Axios from 'axios'
import { CART_EMPTY } from "../Constants/CartConstant";
import {ORDER_DETAILS_REQUEST} from '../Constants/OrderConstants';

export const  createOrder=(order)=> async(dispatch,getState)=>
{
    dispatch({type:ORDER_CREATE_REQUEST,payload:order})
    try
    {
       const {userSignin:{userinfo}} =getState(); 
       const {data} = await Axios.post('/api/orders',order, {

        headers:{
            Authorization:`Bearer ${userinfo.token}`
        }
       })

       dispatch({type:ORDER_CREATE_SUCCESS,payload: data.order})
       dispatch({type:CART_EMPTY})
       localStorage.removeItem('cartItems');
                
    }catch(error)
    {
        dispatch({type:ORDER_CREATE_FAIL,payload:error.response.data.message?error.response.data.message:error.message})
    }
}


export const detailsOrder=(orderId)=> async(dispatch,getState)=>{
                
    dispatch({type:ORDER_DETAILS_REQUEST,payload:orderId})
     const {userSignin:{userInfo}}=getState();
    try {

      const {data}=await Axios.get(`/api/orders/${orderId}`,
      {
          headers:{
              Authorization:`Bearer${userInfo.token}`
          }
      })

      dispatch({type:ORDER_CREATE_SUCCESS,payload:data})
        
    } catch (error) {

        const message=error.response&&error.response.data.message?error.response.data.message:error.message;
      dispatch({type:ORDER_CREATE_FAIL,payload:message})  
    }

}