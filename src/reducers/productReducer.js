import { RECEIVED_PRODUCT } from '../actions/action-types';

let initialState={
    total:0,
    items:[],
    receivedAt:''
}

function productReducer(state=initialState, action){
    switch(action.type)
    {
        case RECEIVED_PRODUCT:
            return Object.assign({},
                    {
                        total:action.payload.total,
                        receivedAt: Date.now(),
                        items: action.payload.items
                    }
                );
        default:
            return state;
    }
}

export default productReducer;

