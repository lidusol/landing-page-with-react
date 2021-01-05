import React, { Component } from "react";
import logo from '../../Logo.png';
 
import './Home.css'; 

class Home extends Component {
  render() {
    return (
      <div className="home_pg">
        <div className="home__header">
          <p>Redwan Computer Networking, 
          <br></br>Design and Consultancy </p>
            <div className="logo">
              <img src={logo} width="200" height="auto" alt="rcndc logo"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;