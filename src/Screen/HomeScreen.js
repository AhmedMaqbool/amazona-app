import React,{useState,useEffect} from 'react'
import Product from '../Components/Product'
import axios from 'axios';
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'


export const HomeScreen = () => {
    
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    
    useEffect(()=>{
        const fetchdata= async() =>
        {
            try {
                
            setLoading(true);
            const {data}= await axios.get('/api/products')
            setLoading(false)
            setProducts(data)
            } catch (err) {
                setError(err.message);
                setLoading(false);       
            }
        }
        fetchdata();
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
              products.map(product=>(
              
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
