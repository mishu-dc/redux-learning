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
                        total:action.total,
                        receivedAt: Date.now(),
                        products: action.result
                    }
                );
        default:
            return state;
    }
}

export default productReducer;

