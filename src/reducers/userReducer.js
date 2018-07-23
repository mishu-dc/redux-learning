import {USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from '../actions/action-types';

let initialState={
    isAuthenticated:false,
    message:'',
    user:
    {
        userName:'',
        password:'',
        accessToken:'',
        tokenExpires:'',
        tokenType:''
    }
}

function userReducer(state=initialState, action){
    switch(action.type){
        case USER_LOGIN:
            return Object.assign({},
                state,
                {
                    user:
                    {
                        userName:action.userName,
                        password:action.password
                    } 
                }   
            );

        case USER_LOGIN_SUCCESS:
            return Object.assign({},
                state,
                {
                    isAuthenticated:true,
                    user:
                    {
                        accessToken:action.accessToken,
                        tokenExpires:action.tokenExpires,
                        tokenType:action.tokenType
                    }
                })

        case USER_LOGIN_ERROR:
            return Object.assign({},
            state,
            {
                isAuthenticated:false,
                message:action.message
            });    
                
        default:
            return state;
    }
}

export default userReducer;