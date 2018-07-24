import { RECEIVED_PRODUCT } from '../actions/action-types';

let initialState={
    total:0,
    products:[],
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
                        brands: action.payload.results
                    }
                );
        default:
            return state;
    }
}

export default productReducer;

