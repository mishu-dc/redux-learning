import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import  rootReducer  from "./reducers/index";

import App from './App';

import { addBrand, fetchBrands } from './actions/brandActions';
import { addProduct, fetchProducts } from './actions/productActions';
import { addDistributor, fetchDistributors } from './actions/distributorActions';
import { addFieldforce, fetchFieldforces } from './actions/fieldforceActions';
import { addMarket, fetchMarkets } from './actions/marketActions';
import {verifyLogin} from './actions/userActions';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;
window.addBrand = addBrand;
window.addProduct = addProduct;
window.fetchBrands = fetchBrands;
window.fetchProducts = fetchProducts;
window.verifyLogin = verifyLogin;
window.fetchDistributors = fetchDistributors;
window.fetchFieldforces = fetchFieldforces;
window.fetchMarkets = fetchMarkets;
window.addDistributor = addDistributor;
window.addFieldforce = addFieldforce;
window.addMarket = addMarket;

store.subscribe(()=> console.log("store", store.getState()));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
