import {USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from '../actions/action-types';

let initialState={
    isAuthenticated:false,
    message:'',
    user:
    {
        userName:'',
        accessToken:'',
        tokenExpireIn:'',
        tokenType:'',
        receivedAt:''
    }
}

function userReducer(state=initialState, action){
    switch(action.type){
        case USER_LOGIN:
            return Object.assign({},
                state,
                {
                    isAuthenticated:false,
                    user:
                    {
                        userName:action.payload.userName
                    } 
                }   
            );

        case USER_LOGIN_ERROR:
            console.log("USER_LOGIN_ERROR", action);
            return Object.assign({},
                state,
                {
                    isAuthenticated:false,
                    message:action.payload.error_description,
                    user:
                    {
                        userName:'',
                        accessToken:'',
                        tokenExpireIn:'',
                        tokenType:'',
                        receivedAt:''
                    }
                });

        case USER_LOGIN_SUCCESS:
            return Object.assign({},
                state,
                {
                    isAuthenticated:true,
                    message:'success',
                    user:
                    {
                        userName: action.payload.userName,
                        accessToken:action.payload.access_token,
                        tokenExpireIn:action.payload.expires_in,
                        tokenType:action.payload.token_type,
                        receivedAt:Date.now()
                    }
                });
                
        default:
            return state;
    }
}

export default userReducer;