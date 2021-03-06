import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../../features/HomePage/HomePage";
import Collection from "../../../features/Products/Collection/Collection";
import Product from "../../../features/Products/Product/Product";
import Cart from "../../../features/Cart/Cart/Cart";
import Checkout from "../../../features/Checkout/Checkout/Checkout";
import Payment from "../../../features/Payment/Payment/Payment";
import classes from "./App.module.css";
import CreateProduct from "../../../features/Products/CreateProducts/createProduct";

class App extends Component {
  render() {
    return (
      <Container className={classes.Main}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/collection" exact component={Collection} />
          <Route
            path="/collection/product/:ProductName"
            exact
            component={Product}
          />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/checkout/:OrderId" exact component={Checkout} />
          <Route path="/payment/:OrderId" exact component={Payment} />
          <Route path="/create" exact component={CreateProduct} />
        </Switch>
      </Container>
    );
  }
}

export default App;
