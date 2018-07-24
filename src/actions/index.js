
import { ADD_BRAND, FETCH_BRAND, RECEIVED_BRAND  } from "./action-types";
import { ADD_PRODUCT, FETCH_PRODUCT, RECEIVED_PRODUCT  } from "./action-types";
import { NETWORK_CALL_START, NETWORK_CALL_END, NETWORK_CALL_ERROR  } from "./action-types";

export function addBrand(brand){
    return {
        type: ADD_BRAND,
        brand
    }
}

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function receivedBrands(response){
    return {
        type: RECEIVED_BRAND,
        payload: response
    }
}

export function receivedProducts(response){
    return {
        type: RECEIVED_PRODUCT,
        payload: response
    }
}

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

export function fetchBrands(params) {
    return function (dispatch) {
      dispatch(networkCallStart())

      let url='http://localhost:59821/api/brands/';

      return fetch(url)
            .then(res => res.json())
            .then((response) => {
                    dispatch(networkCallEnd()),
                    dispatch(receivedBrands(response))
                },
                (error) => {
                    dispatch(networkCallError(error))
                }
            );
    }
}

