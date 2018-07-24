import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";

import App from './App';
import {addBrand, fetchBrands} from './actions/brandActions';
import {addProduct, fetchProducts} from './actions/productActions';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;
window.addBrand = addBrand;
window.addProduct = addProduct;
window.fetchBrands = fetchBrands;

store.subscribe(()=> console.log("store", store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));
