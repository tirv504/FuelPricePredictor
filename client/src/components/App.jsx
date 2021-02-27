import React from "react";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Register from "./Register.jsx";
import './style.css';
import bgImg from './../images/young-woman-remote-working-in-a-cafe-picjumbo-com.jpg';

class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = { page: 'login', authenticated: false};
  }
  
  
  changeLocation( destination_page) {
    // if (this.pages.indexOf(destination_page) + 1 )
    console.log('Set state.page to',destination_page)
      this.setState({page: destination_page});
  }



  //changing the code to use props to show them
  render() {
    return (
      
      <div className="container container-padding container-100vh textc-gunmetal bgc-cultured">
        <nav>
          <div className="navbar container-flex flex-space-between">
            <div className="logo">Frontend Assignment</div>
            <ul className="nav-links container-flex ">
              <li className={`link-item ${this.state.page=='login'? 'active': ''}`} onClick={()=> this.changeLocation('login')}>Login</li>
              <li className={`link-item ${this.state.page=='register'? 'active': ''}`} onClick={()=> this.changeLocation('register')}>Register</li>
              <li className={`link-item ${this.state.page=='profile'? 'active': ''}`} onClick={()=> this.changeLocation('profile')}>Profile</li>
              
            </ul>
          </div>
        </nav>
        <div className="main-section container container-flex  center-margined">

      {/* Login */}
        <div className={`card  bgc-desert-sand container-flex ${this.state.page == 'login'? 'shown': 'hidden'}`}>
          <div className="card-hero">
            <img style={{backgroundImage: `url(${bgImg})`}} alt="" className="card-img"/>
          </div>
          <div className="content flex-justify-end">
            
            <div className="height-100 container-flex flex-column center-margined">
              {this.page}
              <Login />
            </div>

          </div>

        </div>

      {/* Register */}
        <div className={`card  bgc-desert-sand container-flex ${this.state.page == 'register'? 'shown': 'hidden'}`}>
          <div className="card-hero">
            <img style={{backgroundImage: `url(${bgImg})`}} alt="" className="card-img"/>
          </div>
          <div className="content container-flex center-margined">

            <div className="height-100 container-flex flex-column center-margined">
              <Register />
            </div>
            
          </div>

        </div>

      {/* Profile */}
        <div className={`card  bgc-desert-sand container-flex ${this.state.page == 'profile'? 'shown': 'hidden'}`}>
          {/* <div className="card-hero">
            <img style={{backgroundImage: `url(${bgImg})`}} alt="" className="card-img"/>
          </div> */}
          <div className="content container-flex center-margined card-profile-content">
            

            <div className="container-flex flex-column center-margined width-100 height-100">
              <Profile />
            </div>

          </div>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
