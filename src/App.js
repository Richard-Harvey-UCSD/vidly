import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

// class component
class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
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
// form validation

// Forms:
// login
// search movies

// Backend:
// Node.js - run JS outside of the browser
// Express.js - build RESTful APIs
// MongoDB - create database

// Setup MongoDB database

// Update:
// fakeMovieService -> MovieService
// fakeGenreService -> GenreServiceS

// Connect movieForm.js to the backend

// Authentication and Authorization:
// JSON Web Tokens - used to authenticate users - https://jwt.io
// Calling Protected APIs
// Showing / Hiding Elements
// Protecting Routes

