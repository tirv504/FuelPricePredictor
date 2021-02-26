import React from "react";
import Login from "./Login.jsx";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoggedin: true,
    });
  }

  render() {
    if (!this.state.isLoggedin) {
      return (
        <form>
          <div className="form">
            <h2>Register User</h2>
            <div className="innerForm">
              <div className="userName">
                <label>User Name</label>
                <input
                  name="userName"
                  placeholder="Username"
                  value={this.userName}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="pwd">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.password}
                  onChange={this.changeHandler}
                  required
                ></input>
              </div>
              <div className="pwd">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Re-enter Password"
                  value={this.password}
                  onChange={this.changeHandler}
                  required
                ></input>
                <button>Register</button>
              </div>

              <button className="reviewBtn" onClick={this.handleLogin}>
                Login
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div>
          <Login />
        </div>
      );
    }
  }
}

export default Register;
