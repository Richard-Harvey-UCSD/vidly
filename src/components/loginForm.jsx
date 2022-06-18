import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    // must declare username and password as an empty string
    account: { username: "", password: "" },
  };

  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    // call the server
    const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
