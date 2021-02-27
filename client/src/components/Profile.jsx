import React from "react";
import usa_states from "./usa_states";


class Profile extends React.Component {
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


  //function takes x and returns option tags with value attributue x
  // (x) => <option valu='x'>x</option>
  makeStateOption(_states){
    return _states.map( _state => {
      return <option value={_state}>{_state}</option>;
    })
  }

  submitProfile(event){

    //we will hijack the 
    event.preventDefault();
    alert("Your form passed validation and submitted")
  }
  
  render() {
    return (
      <div className='profile_page'>
        <h2>Profile</h2>

        <form onSubmit={this.submitProfile}>
        <div className="profile_form">
          
          <div className="input_group container-flex">
              <label htmlFor="">Full name</label>
              <input type="text" name='fullname' maxLength='50' required/>
          </div>
          

          
          <div className="input_group  container-flex">
              <label htmlFor="">Address1</label>
              <input type="text" name='address1' maxLength='100' required/>
          </div>
          

          <div className="input_group container-flex">
              <label htmlFor="">Address2</label>
              <input type="text" name='address2' maxLength='100'/>
          </div>
          
          <div className="input_group container-flex">
              <label htmlFor="">City</label>
              <input type="text" name='city' maxLength='100' required/>
          </div>
          

          <div className="input_group container-flex">
              <label htmlFor="">State</label>
              <select name="state" id="" required>
                <option>Select a state</option>
                {/* define state options here */}

                { this.makeStateOption(usa_states)}
              </select>
          </div>
          

          {/* more additions go below here */}

          <div className="input_group container-flex">
            <label htmlFor="">Zipcode</label>
            <input type="number" name="" id="" minlength="5" maxlength="9" required/>
          </div>


          <div className="input_group container-flex">
            <button value="submit" type="submit">submit</button>
          </div>

        </div>
        </form>
        {/* inform */}
      </div>

    );
  }
}

export default Profile;
