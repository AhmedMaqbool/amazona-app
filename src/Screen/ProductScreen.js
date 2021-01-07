import React,{useEffect,useState} from 'react'
import data from '../data';
import  Rating from '../Components/Rating'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox'
import { detailsProduct } from '../Actions/ProductActions';


const ProductScreen = (props) => {
       
    console.log(props)
     const productDetails = useSelector((state)=>state.productDetails)
     const dispatch = useDispatch()
     const productId=props.match.params.id;
     const [Qty, setQty] = useState(1);
     const {loading,error,product}=productDetails;

     useEffect(() => {
        
        dispatch(detailsProduct(productId))
     }, [dispatch,productId])


     const addToCartHandler=()=>
     {
         props.history.push(`/cart/${productId}?Qty=${Qty}`)
     }

    
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
                   <img className="large" src={data.product[0].image} alt={product.name}/>
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
                            {
                                product.countInStock>0&&(
                                    <>
                                    <li>
                                        <div className='row'>
                                            <div>Qty</div>
                                            <div>
                                             <select value={Qty} onChange={e=>setQty(e.target.value)}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x)=>(
                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                    ))
                                                }
                                             </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                    <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                    </li>
                                    </>
                                )
                            }
                           
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
