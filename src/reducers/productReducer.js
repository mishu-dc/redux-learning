import {ADD_PRODUCT} from '../actions/action-types';

let initialState={
    total:0,
    products:[],
    receivedAt:''
}

function productReducer(state=initialState, action){
    switch(action.type)
    {
        case ADD_PRODUCT:
            console.log("ADD_PRODUCT state", state);
            console.log("ADD_PRODUCT action", action);
            return [...state, action.product];
        default:
            console.log("default product state", state);
            console.log("default product action", action);
            return state;
    }
}

export default productReducer;

