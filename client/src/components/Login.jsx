import React from "react";
import Register from "./Register.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister() {
    this.setState({
      isRegistered: true,
    });
  }

  render() {
    if (!this.state.isRegistered) {
      return (
        <div>
          <div className="form">
            <h2>User Login</h2>
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
                <button>Login</button>
              </div>

              <button className="reviewBtn" onClick={this.handleRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Register />;
    }
  }
}

export default Login;
