import React from "react";

import { userService } from "../_services";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    console.log("username :", username);
    console.log("password :", password);
  }

  render() {
    // const { username, password } = this.state;

    return (
      <React.Fragment>
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            // value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // value={password}
            onChange={this.handleChange}
          />
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export { LoginPage };
