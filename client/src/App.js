import './App.css';
import React, { Component } from "react"

import Navbar from './components//navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import AboutUs from './components/about/AboutUs';
import More from './components/more/More';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { MDBContainer } from "mdbreact";

class App extends Component {
  render(){
    return (
      <MDBContainer className='m-0 p-0' style={{ height: '100vh' }} fluid>
        <Navbar/>
        <div id="home"><Home/></div>
        <div id="about"><AboutUs/></div>
        <div id="services"><Services/></div>
        <div><More/></div>
        <div id="contact"><Contact/></div>
        <Footer/>
      </MDBContainer>
    );
  }
}

export default App;
