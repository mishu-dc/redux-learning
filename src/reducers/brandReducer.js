import { RECEIVED_BRAND } from "../actions/action-types";

let initialState={
    total:0,
    brands:[],
    receivedAt:''
}

function brandReducer(state=initialState, action){
    switch(action.type){
        case RECEIVED_BRAND:
            return Object.assign({},
                    {
                        total:action.payload.total,
                        receivedAt: Date.now(),
                        brands: action.payload.result
                    }
                );
        default:
            return state;
    }
}

export default brandReducer;