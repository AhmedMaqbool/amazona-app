import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/ProductConstants";

// Home Screen Reducer 
export const productListReducer=(state={loading:true,product:[]},action)=>
{
       switch (action.type)
       {
           case PRODUCT_LIST_REQUEST:
               return {loading:true}
            case PRODUCT_LIST_SUCCESS:
                return{loading:false,product:action.payload}
            case PRODUCT_LIST_FAIL:
                return{loading:false,error:action.payload}
            default:
                return state;
       }
}



// Product Details Reducer
export const productDetailsReducer=(state={product:{},loading:true},action)=>
{
           switch(action.type)
           {
              case PRODUCT_LIST_REQUEST:
                return{loading:true,product:action.payload}

                case PRODUCT_DETAILS_SUCCESS:
                    return {loading:false,product:action.payload}

                case PRODUCT_DETAILS_FAIL:
                    return {loading:false,error:action.payload}

                default:
                    return state;
           }
}


