import {applyMiddleware, createStore,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {productListReducer,productDetailsReducer} from './Reducer/ProductReducers'
import {cartReducer} from './Reducer/CartReducer'
import { userSignInReducer,userRegisterReducer} from './Reducer/UserReducer';
import {orderCreateReducer, orderDetailsReducer} from './Reducer/OrderReducer';



const initalState={
    
    userSignIn:{
        userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null,   
    },
    
    cart:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        shippingAddress:localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{},
        paymentMethod:'PayPal'
    }
};
const reducer=combineReducers({
      productList: productListReducer,
      productDetails:productDetailsReducer,
      cart:cartReducer,
      userSignIn:userSignInReducer,
      userRegister:userRegisterReducer,
      orderCreate:orderCreateReducer,
      orderDetails:orderDetailsReducer,

})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
    reducer,
    initalState,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store;