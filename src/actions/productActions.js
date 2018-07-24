import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';
import { ADD_PRODUCT, FETCH_PRODUCT, RECEIVED_PRODUCT  } from "./action-types";

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function receivedProducts(response){
    return {
        type: RECEIVED_PRODUCT,
        payload: response
    }
}


export function fetchProducts(params) {
    return function (dispatch) {
      dispatch(networkCallStart())

      let url='http://localhost:59821/api/products/';

      return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd()),
                    dispatch(receivedProducts(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}

