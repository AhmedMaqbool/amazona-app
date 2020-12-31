import React,{useEffect} from 'react'
import Product from '../Components/Product'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import {useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../Actions/ProductActions'


export const HomeScreen = () => {
    
     const productList=useSelector((state)=>state.productList)
     const {loading,error,product}=productList;
     const dispatch = useDispatch();
    useEffect(()=>{
       
        dispatch(listProducts()); 
    },[])

    
    
    
    return (
        <div>

            {loading?<LoadingBox></LoadingBox>
             :    
             error?<MessageBox variant='danger'>{error}</MessageBox>
             :
            <div>
         <div className="row center">
          {
              product.map(product=>(
              
                       <Product key={product._id} product={product} />
              ))
          }
          
          </div>
        </div>
        }
        </div>
    );
}

export default HomeScreen;
