import { ADD_BRAND } from "../actions/action-types";

const initialState = {
    brands: []
  };

function rootReducer (state = initialState, action){
    switch(action.type){
        case ADD_BRAND:
            console.log("ADD_BRAND state", state);
            console.log("ADD_BRAND action", action);
            return [...state.brands, action.brand];
        default:
            return state;
    }
}

export default rootReducer;