import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './About.css';

class AboutUs extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol lg="4" md="4" className="col--left">
            <div >
              <h1 className="heading heading--main">about</h1>
              <h1 className="heading heading--sub">us</h1>
            </div>
          </MDBCol>
          <MDBCol lg="8" md="8"  className="col--right">
            <div className="section__detail">
              <p>
              RCNDC is a private company that started operation in Addis Ababa on 2017. 
              It was established on the mindset of resolving the technology delay of enterprises. 
              Hence, it has worked with different companies and has succeeded in simplifying work progress, 
              effectiveness, client satisfaction, saving time, convenience, and cost efficiency.
              </p>
            </div>
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
    );
  }
}
 
export default AboutUs;