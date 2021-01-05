import React, { Component } from "react";
import {Link} from 'react-scroll'
import './Navbar.css';
import { MDBContainer } from "mdbreact";

export default class Navbar extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <div className="navbar__border"></div>
        <div className="navbar-container">
          <ul>
            <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
            <li><Link  to="services" spy={true} smooth={true}>Service</Link></li>
            <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          </ul>
        </div>
      </MDBContainer>
    );
  }
}