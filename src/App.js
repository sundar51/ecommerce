import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
export default class App extends Component {
  render() {
    return (
    <React.Fragment>
     <Navbar />
     <Switch>
       <Route exact path="/" component={ProductList} />
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart} />
       <Route component={Default} />
     </Switch>
     <Modal />
     <div className="footer">
      Developed by Sundar Shrestha (sundarshrestha86@gmail.com)
     </div>
   </React.Fragment>
    );
  }
}
