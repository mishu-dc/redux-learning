import brandReducer from './brandReducer';
import productReducer from './productReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({brands: brandReducer, prodcuts: productReducer});