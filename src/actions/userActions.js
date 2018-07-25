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
                if(!response.ok){
                    throw Error(response.json());
                }
                return response.json();
            })
            .then((response) => {
                    dispatch(networkCallEnd())
                    dispatch(loginSuccess(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                    loginFailed(error)
                }
            ).catch(function(error){
                dispatch(networkCallError(error))
                loginFailed(error)
            });
    }
}
