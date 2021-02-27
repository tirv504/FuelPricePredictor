import React from "react";
import FuelPriceForm from "./FuelPriceForm.jsx"
//import '../styles/styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FuelPriceForm />
      </div>
      
    )
  }
}

export default App;
