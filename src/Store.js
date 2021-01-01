import {applyMiddleware, createStore,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk';
import {productListReducer,productDetailsReducer} from './Reducer/ProductReducers'
import {cartReducer} from './Reducer/CartReducer'



const initalState={
    cart:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
    }
};
const reducer=combineReducers({
      productList: productListReducer,
      productDetails:productDetailsReducer,
      cart:cartReducer,
})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
    reducer,
    initalState,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store;