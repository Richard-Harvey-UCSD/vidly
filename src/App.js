import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movies from "./components/movies";
import "./App.css";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";

// class component
class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <Movies /> */}
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customers}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/not-found" component={NotFound}></Route>
      </main>
    );
  }
}

export default App;

// Summary:
// component design
// component interface
// reusable components
// refactoring
// writing clean code

// Routing:
// route parameters
// query string
// redirect
// not found (404) pages
// nested routing
