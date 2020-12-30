import React from 'react'
import Rating from './Rating'
import data from '../data'



const Product = ({product}) => {

             console.log(product.image)
     
    return (
        
        <div key={product._id} className="card">
        <a href={`/product/${product._id}`}>
          
        <img className="medium" src={data.product[`${product.image}`].image} alt={product.name}/>
        </a>
        <div className="card-body">
          <a href="product.html">
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews}/>

          <div className="price">$ {product.price}</div>
        </div>
      </div>
    )
}

export default Product
