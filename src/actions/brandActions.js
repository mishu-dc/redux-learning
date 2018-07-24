import { ADD_BRAND, FETCH_BRAND, RECEIVED_BRAND  } from "./action-types";
import { networkCallStart, networkCallEnd, networkCallError } from './networkActions';

export function addBrand(brand){
    return {
        type: ADD_BRAND,
        brand
    }
}

export function receivedBrands(response){
    return {
        type: RECEIVED_BRAND,
        payload: response
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