import React, { Component } from "react";
import './Footer.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Link} from 'react-scroll'

export default class Footer extends Component {
  render() {
    return (
      <MDBContainer fluid className="footer">
        <MDBRow>
           <MDBCol>
             <div>
               <h3 className="footer__heading">Reach us</h3>
               <p><a className="mailto" href="mailto:contact@rcndc.com">contact@rcndc.com</a></p>
               <p>+251 925 002 580  / +251 943 141 717</p>
               <p>P.O. box 230/1070</p>
               <p>Addis Ababa, Ethiopia</p>
             </div>
           </MDBCol>
           <MDBCol>
             <div className="nav-links">
              <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
              <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
              <li><Link  to="services" spy={true} smooth={true}>Service</Link></li>
              <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
             </div>
           </MDBCol>
        </MDBRow>
        
        <div className="text-center">
          <p>2020 RCNDC. All rights reserved.</p>
        </div>
      
      </MDBContainer>
    );
  }
}