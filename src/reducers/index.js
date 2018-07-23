import brandReducer from './brandReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
import networkReducer from './networkReducer';

import {combineReducers} from 'redux';

export const rootReducer = combineReducers(
    {
        brand: brandReducer, 
        prodcut: productReducer,
        user: userReducer,
        network:networkReducer
    });