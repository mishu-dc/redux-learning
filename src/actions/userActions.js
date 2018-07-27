import {USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR} from './action-types';
import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';


export function loginSuccess(response){
    return {
        type: USER_LOGIN_SUCCESS,
        payload: response
    }
}

export function loginFailed(response){
    return {
        type: USER_LOGIN_ERROR,
        payload: response
    }
}

export function userLogin(credentials){
    return {
        type: USER_LOGIN,
        payload: credentials
    }
}

export function verifyLogin(credentials){
    return function(dispatch){
        dispatch(networkCallStart())
        userLogin(credentials);

        let url = "http://localhost:59821/token";
        const body = 'grant_type=password&username=' + credentials.userName + '&password=' + credentials.password;

        return fetch(url, {
                method: "POST",
                body: body,
                headers: {
                    "Content-Type": "text/plain"
                },
            }).then(function(response){
                return response.json();
            }).then((response) => {
                    if(response.error!==undefined){
                        dispatch(networkCallError( {'message': response.error_description})),
                        dispatch(loginFailed(response))
                    }
                    else{
                        dispatch(networkCallEnd({'message':'user logged in successfully'})),
                        dispatch(loginSuccess(response))
                    }
                },
                (error) => {
                    dispatch(networkCallError({'message': error})),
                    loginFailed(error)
                }
            )
    }
}
