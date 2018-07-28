
import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './App.css';

import * as brandActions  from './actions/brandActions';
import * as productActions from './actions/productActions';
import * as distributorActions from './actions/distributorActions';
import * as fieldforceActions from './actions/fieldforceActions';
import * as marketActions from './actions/marketActions';
import * as userActions from './actions/userActions';


function mapStateToProps(state){
  return {
      brand: state.brand,
      distributor : state.distributor,
      fieldforce: state.fieldforce,
      market: state.market,
      network: state.network,
      product: state.product,
      user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( {
      ...brandActions,
      ...productActions,
      ...distributorActions,
      ...fieldforceActions,
      ...marketActions,
      ...userActions
  }, dispatch);
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>React-Redux</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
