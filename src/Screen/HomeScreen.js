import React from 'react'
import data from '../data'
import Product from '../Components/Product'


export const HomeScreen = () => {
    return (
        <div>
            <div>
        <div className="row center">
          {
              data.product.map(product=>(
              
                       <Product key={product._id} product={product} />
              ))
          }
          
          </div>
      </div>
        </div>
    )
}

export default HomeScreen;
