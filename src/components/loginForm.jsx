import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    // must declare username and password as an empty string
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // console.log("result: ", result);

    // const errors = {};

    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required.";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required.";
    //   // ...
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required.";
    //   // ...
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.log("errors: ", errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
