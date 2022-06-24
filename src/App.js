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
import ProtectedRoute from "./components/common/protectedRoute";
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
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
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

// Setup MongoDB database - set users to admin here

// Update:
// fakeMovieService -> MovieService
// fakeGenreService -> GenreServiceS

// Connect movieForm.js to the backend

// Authentication and Authorization:
// JSON Web Tokens - used to authenticate users - https://jwt.io
// Calling Protected APIs
// Showing / Hiding Elements
// Protecting Routes

// Exercise: only show delete button if user is logged in and has admin role

// Deployment:
// Environment Variables
// Production Builds - can run on server
// Deploying to Heroku - cloud service

// Accounts:
// Heroku - cloud application deployment
// mLab - cloud database storage
// MongoDB - local database
// Sentry - database issue logger
// Git

// git push heroku master
// heroku open