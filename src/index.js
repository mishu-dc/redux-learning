import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";

import App from './App';
import {addBrand, addProduct} from './actions/index';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

window.store = store;
window.addBrand = addBrand;
window.addProduct = addProduct;

ReactDOM.render(<App />, document.getElementById('root'));
