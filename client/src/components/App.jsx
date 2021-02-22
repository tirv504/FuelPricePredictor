import React from "react";
import Login from "./Login.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
