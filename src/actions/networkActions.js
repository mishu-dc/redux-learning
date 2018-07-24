import {NETWORK_CALL_START, NETWORK_CALL_END, NETWORK_CALL_ERROR} from './action-types';

export function networkCallStart(){
    return {
        type:NETWORK_CALL_START
    }
}

export function networkCallEnd(){
    return {
        type:NETWORK_CALL_END
    }
}

export function networkCallError(error){
    return {
        type:NETWORK_CALL_ERROR,
        error
    }
}