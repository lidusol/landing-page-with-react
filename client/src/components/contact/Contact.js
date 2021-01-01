import React, { Component } from "react";
import { MDBContainer} from "mdbreact";

import './Contact.css';

import emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      notification: ""
    }
  }
  
  sendMessage = (e) => {
    e.preventDefault();
    const {name, email, subject, message } = this.state;
    
    let setNotification = (text) => {
      this.setState({notification: text })
    }

    let params = {
      from_name: name,
      from_email: email,
      to_name: 'contact@rcndc.com',
      subject: subject,
      message: message
    }

    let service_id = "service_5092wtp";
    let template_id = "template_funy44g";
    let user_id = "user_i5IcULn1vsAbTnVSVIeLE";

    emailjs
      .send(service_id, template_id, params, user_id)
      .then(
        setNotification('Thank you for getting in touch! One of our colleagues will get back in touch with you soon! Have a great day!')
        )
      .catch(function(error) {
        console.log('FAILED...', error);
      });

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <MDBContainer className="contact__pg">
        <div className="contact__header text-center">
          <h2 className="form__title">contact us</h2>
          <p className="form__desc">For all enquiires, please fill the form below</p>
        </div>
        <div className="contact__form">
          <form onSubmit={this.sendMessage.bind(this)}>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <input type="text" name="name" className="form-control" value={this.state.name} id="name"  placeholder="Full Name" onChange={this.handleChange.bind(this.handleChange, 'name')} required/>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input type="email" name="email" className="form-control" value={this.state.email} id="email"  placeholder="Email" onChange={this.handleChange.bind(this.handleChange, 'email')} required/>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input type="text" name="subject" className="form-control" value={this.state.subject}  id="subject" placeholder="Subject" onChange={this.handleChange.bind(this.handleChange, 'subject')} required/>
            </div>
            <div className="form-outline mb-4">
              <textarea type="textarea" name="message" className="form-control" value={this.state.message} id="message" rows="4" placeholder="Message" onChange={this.handleChange.bind(this.handleChange, 'message')} required></textarea>
            </div>
            <div className="form-notification" onChange={this.handleChange.bind(this.handleChange, 'notification')}>
              <p>{this.state.notification}</p>
            </div>
            <button type="submit" className="btn btn-mail mb-4">Submit</button>
          </form>
        </div>
      </MDBContainer>
    );
  }
}
 
export default Contact;
