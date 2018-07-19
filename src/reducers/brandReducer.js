import { ADD_BRAND } from "../actions/action-types";

function brandReducer(state = [], action){
    switch(action.type){
        case ADD_BRAND:
            console.log("ADD_BRAND state", state);
            console.log("ADD_BRAND action", action);
            return [...state, action.brand];
        default:
            console.log("default brand state", state);
            console.log("default brand action", action);
            return state;
    }
}

export default brandReducer;