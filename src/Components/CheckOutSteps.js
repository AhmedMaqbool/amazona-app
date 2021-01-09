import React from 'react'

const CheckOutSteps = (props) => {
    return (
        <div className='row checkout-steps'>
            <div className={props.step1?'active':null}>Sign In</div>
            <div className={props.step2?'active':null}>Shipping</div>
            <div className={props.step3?'active':null}>Payment</div>
            <div className={props.step4?'active':null}>Place Order</div>
            
        </div>
    )
}

export default CheckOutSteps
