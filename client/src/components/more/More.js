import React, { Component } from "react";

import team from '../../images/icons/Our-team.png';
import reward from '../../images/icons/Achievements-&-awards.png';
import news from '../../images/icons/News-&-stories.png';
 
import './More.css'; 

import { MDBContainer, MDBCol, MDBRow} from "mdbreact";

class More extends Component {
  render() {
    return (
        <MDBContainer className="section">
          <MDBRow className="section-bg"></MDBRow>
          <MDBRow>
            <MDBCol md="4" sm="12" className="item-col">
              <hr className="horizontal"/>
              <div className="section__item">
                <div className="item_icon">
                  <img src={team} width="150px" height="auto" alt="team icon"/>
                </div>
                <div className="item__desc">
                  <div className="item__title">
                  <h3>our team</h3>
                  </div>
                  <div className="item__detail">
                    <p>Meet our team</p>
                  </div>
                </div>
              </div>
              <hr className="horizontal"/>
            </MDBCol>
            <MDBCol md="4" sm="12" className="item-col">
              <hr className="horizontal"/>
              <div className="section__item">
                <div className="item_icon">
                  <img src={reward} width="150px" height="auto"  alt="rewards icon"/>
                </div>
                <div className="item__desc">
                  <div className="item__title">
                    <h3>ACHIEVEMENTS & REWARDS</h3>
                  </div>
                  <div className="item__detail">
                    <p>Check out our accomplishments</p>
                  </div>
                </div>
              </div>
              <hr className="horizontal"/>
            </MDBCol>
            <MDBCol md="4" sm="12" className="item-col">
              <hr className="horizontal"/>
              <div className="section__item">
                <div className="item_icon">
                  <img src={news} width="150px" height="auto"  alt="news icon"/>
                </div>
                <div className="item__desc">
                  <div className="item__title">
                    <h3>NEWS & STORIES</h3>
                  </div>
                  <div className="item__detail">
                    <p>Check out the latest news and stories about RCNDC and related issues</p>
                  </div>
                </div>
              </div>
              <hr className="horizontal"/>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    );
  }
}

export default More;