import React,{useEffect} from 'react'
import {addToCart} from '../Actions/CartAction'
import {useDispatch} from 'react-redux';

const CartScreen = (props) => {

    const productId=props.match.params.id
    const Qty=props.location.search?Number(props.location.search.split('=')[1]):1;
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(productId)
        {
            dispatch(addToCart(productId,Qty))
        }

    }, [dispatch,productId,Qty])
    
    
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Add to cart : ProductId:{productId} Qty:{Qty}</p>
        </div>
    )
}

export default CartScreen
