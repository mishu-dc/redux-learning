
import { ADD_BRAND, ADD_PRODUCT, FETCH_PRODUCT, FETCH_BRAND } from "./action-types";

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

