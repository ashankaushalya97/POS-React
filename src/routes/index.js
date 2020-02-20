import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Customer from "../component/Customer";
import Item from "../component/Item";
import Order from "../component/Order";
import Dashboard from "../component/Dashboard";


function BasicRoute() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BasicRoute;
// You can think of these components as "pages"
// in your app.
