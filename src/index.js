import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import {rootReducer} from "./reducers/index";
import {addBrand, addProduct} from './actions/index';

const store = createStore(rootReducer);

window.store = store;
window.addBrand = addBrand;
window.addProduct = addProduct;

ReactDOM.render(<App />, document.getElementById('root'));
