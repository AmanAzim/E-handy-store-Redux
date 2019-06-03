import React,{useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
import {connect} from 'react-redux';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import PageNotFound from './components/PageNotFound';
import Modal from './components/modal/Modal';
import * as actions from "./store/actions";



function App(props) {

    useEffect(()=>{
        props.onSetProducts();

    }, []);

  return (
      <React.Fragment>
         <Navbar/> {/*It is not included inside the <Switch> because we want to show the navbar in every rendered page*/}

          <Switch>
              <Route path="/" exact component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>

              <Route component={PageNotFound}/> {/*To catch all the unknown route*/}
          </Switch>

          <Modal/>
      </React.Fragment>
  );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onSetProducts:()=>dispatch(actions.asyn_setProducts())
    }
};

export default connect(null, mapDispatchToProps)(App);
