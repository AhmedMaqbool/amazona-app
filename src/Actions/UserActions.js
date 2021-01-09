import Axios from 'axios';
import {USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNOUT, USER_SIGNIN_SUCCESS} from '../Constants/UserConstant'

// Sign Action
export const signin=(email,password)=>async(dispatch)=>
{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
    
    try {
       const {data} =await Axios.post('/api/users/signin',{email,password})
       console.log(data)
       dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
        
       localStorage.setItem('userInfo',JSON.stringify(data))
    } 
    
    catch (error) 
    {
        
            dispatch({type:USER_SIGNIN_FAIL,
            payload:error.response&&error.data.message?error.response.data.message:error.message})
    }
}
// Register Action 
export const register=(name,email,password)=>async(dispatch)=>
{
    dispatch({type:USER_REGISTER_REQUEST,payload:{name,email,password}});
    
    try {
       const {data} =await Axios.post('/api/users/register',{name,email,password})
       console.log(data)
       dispatch({type:USER_REGISTER_SUCCESS,payload:data})
        
       localStorage.setItem('userInfo',JSON.stringify(data))
    } 
    
    catch (error) 
    {
        
            dispatch({type:USER_REGISTER_FAIL,
            payload:error.response&&error.data.message?error.response.data.message:error.message})
    }
}

// Sign Out Action 
export const signOut =()=>(dispatch)=>
{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({type:USER_SIGNOUT})
}