import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="form">
          <h2>Register User</h2>
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
            <div className="pwd">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password"
                placeholder="Login with your password"
                value={this.password}
                onChange={this.changeHandler}
                required
              ></input>
            </div>

            <button className="reviewBtn" onClick={this.submitHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
