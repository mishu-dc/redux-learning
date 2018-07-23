
import {NETWORK_CALL_START, NETWORK_CALL_END, NETWORK_CALL_ERROR} from '../actions/action-types';

let initialState={
    isFetching: false,
    didInvalidate: false,
    status:'',
    errorMessage:'',
    successmessage:''
}

function networkReducer(state=initialState, action){
    switch(action.type){
        case NETWORK_CALL_START:
            break;
        case NETWORK_CALL_END:
            break;            
        case NETWORK_CALL_ERROR:
            break;            
        default:
            return state;
    }
}
export default networkReducer;