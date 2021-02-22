import React from "react";
import Register from "./Register.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="form">
          <h2>Admin Login</h2>
          <div className="innerForm">
            <div className="userName">
              <label>User Name</label>
              <input
                name="userName"
                placeholder="Login with your username"
                value={this.userName}
                onChange={this.changeHandler}
              />
            </div>
            <div className="pwd">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Login with your password"
                value={this.password}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <button className="reviewBtn" onClick={this.getLinks}>
              Log In
            </button>
          </div>
        </div>
        <Register />
      </div>
    );
  }
}

export default Login;
