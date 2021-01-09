import {USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNOUT, USER_SIGNIN_SUCCESS} from '../Constants/UserConstant' 

export const userSignInReducer=(state={},action)=>
{
    switch (action.type)
    {
        case USER_SIGNIN_REQUEST:
            return {loading:true}
        case USER_SIGNIN_SUCCESS:
            // userInfo is creating a variable in the state which holds the userinfo which we are getting from action.payload
            return {loading:false, userInfo:action.payload}
        case USER_SIGNIN_FAIL:
            return {loading:false, error:action.payload}
        case USER_SIGNOUT:
           return {};
        default:
                return state;
    }
}

// Register Reducer
export const userRegisterReducer=(state={},action)=>
{
    switch (action.type)
    {
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            // userInfo is creating a variable in the state which holds the userinfo which we are getting from action.payload
            return {loading:false, userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        
        default:
                return state;
    }
}