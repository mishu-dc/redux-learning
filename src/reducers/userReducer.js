import {USER_LOGIN} from '../actions/action-types';

let initialState={
    isAuthenticated:false,
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
             break;
        default:
            return state;
    }
}

export default userReducer;