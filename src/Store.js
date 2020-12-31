import {applyMiddleware, createStore,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk';
import ProductReducer from './Reducer/ProductReducers'



const initalState={};
const reducer=combineReducers({
      productList: ProductReducer,
})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(
    reducer,
    initalState,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store;