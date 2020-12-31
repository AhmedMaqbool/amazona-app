import React,{useEffect} from 'react'
import data from '../data';
import  Rating from '../Components/Rating'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox'
import { detailsProduct } from '../Actions/ProductActions';
import p1 from '../images/p1.jpg'

const ProductScreen = (props) => {
       
    console.log(props)
     const productDetails = useSelector((state)=>state.productDetails)
     const dispatch = useDispatch()
     const productId=props.match.params.id;
     const {loading,error,product}=productDetails;

     useEffect(() => {
        
        dispatch(detailsProduct(productId))
     }, [])

    
   return (
          
    <div>

        {loading?<LoadingBox></LoadingBox>
        :    
        error?<MessageBox variant='danger'>{error}</MessageBox>
        :  

        <div>
            <Link to='/'>Back To Results</Link>
          <div className="row top">
              <div className="col-2">
                   <img className="large" src={p1} alt={product.name}/>
              </div>
              <div className="col-1">
                   <ul>
                       <li><h1>{product.name}</h1></li>
                       <li>
                           <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
                       </li>
                       <li>
                          Price : $ {product.price} 
                       </li>
                    <li>
                        <p>{product.description}</p>
                    </li>
                   </ul>
              </div>
              <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className='row'>
                                   <div>Price</div>
                                   <div className='price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                   <div>Status</div>
                                  {
                                      product.countInStock>0?<span className="success">IN STOCK</span>
                                      : <span className="danger">Unavailable</span>
                                  }
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
              </div>
          </div>
        </div>
        
        }
    </div>
    
    )
}

export default ProductScreen
