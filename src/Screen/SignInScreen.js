import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signin} from '../Actions/UserActions'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'

const SignInScreen = (props) => {
    
    const dispatch = useDispatch()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const userSignIn =useSelector(state=>state.userSignIn);
    const {userInfo,loading,error}=userSignIn;
    const redirect =props.location.search?props.location.search.split('=')[1]:'/'
    
    const submitHandler=(e)=>
    {
        e.preventDefault();
        
        dispatch(signin(email,password))
    }

    useEffect(()=>
    {
         if(userInfo)
         {
             props.history.push(redirect)
         }
    },[userInfo,redirect,props.history]);
    
    
    
    return (
        <div>
            <form className="form" onSubmit={submitHandler} >
            <div>
                <h1>Sign In</h1>
            </div>
            {loading &&<LoadingBox></LoadingBox>}
            {error && <MessageBox variant='danger'>{error}</MessageBox>}
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Email" required onChange={e=>setEmail(e.target.value)} />
            
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" required onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <label />
                <button className="primary" type="submit">Sign In</button>
           </div>
           <div>
               <label/>
               <div>
                   New Customer?{' '}
                   <Link to='/register'>Create your account</Link>
               </div>

           </div>
            </form>
        </div>
    )
}

export default SignInScreen
