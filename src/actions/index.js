
import { ADD_BRAND } from "./action-types";

export function addBrand(brand){
    return {
        type: ADD_BRAND,
        brand
    }
}