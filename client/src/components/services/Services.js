import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './services.css'

import erp from '../../images/icons/ERP.png';
import networkingDesign from '../../images/icons/Networking-design.png';
import networkingInstallation from '../../images/icons/Networking-installation.png';
import itAssist from '../../images/icons/IT-assist-&-consultancy.png';
import softwareWeb from '../../images/icons/Software-&-web-development.png';
import systemDev from '../../images/icons/System-development.png';

class Services extends Component {
  render() {
    return (
      <MDBContainer fluid className="services__pg">
        <MDBRow>
          <MDBCol lg="5" md="5">
            <div className="services__title">
              <h1 className="services__heading services__heading--main">Our</h1>
              <h1 className="services__heading services__heading--sub">Services</h1>
            </div>
            <div className="services__desc">
              <p>
                 We provide services to keep your company on the same pace with the entire globe
              </p>
            </div>
          </MDBCol>
          <MDBCol lg="7" md="7">
            <MDBContainer className="services__content">
              <MDBRow>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={erp} width="100px" />
                      {/* <i className="fas fa-network-wired"></i> */}
                    </div>
                    <div className="service__title">
                      <h3>ERP</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        Consulting and managing business processes, and meditate by software and technology
                      </p>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={networkingDesign} width="100px" />
                    </div>
                    <div className="service__title">
                      <h3>NETWORKING DESIGN</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        A design that encompasses topological design, network-synthesis, and network-realization. 
                        And ensuring the new network meets the need of the user.
                      </p>
                      <p>
                        For residential, commercial, and industrial buildings. 
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={networkingInstallation} width="100px" />
                    </div>
                    <div className="service__title">
                      <h3>NETWORKING INSTALLATION</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        We provide cable system installation, project management 
                        services over the spectrum of data, voice, electronic safety & 
                        security, and audio & video technologies, encompassing optical 
                        fiber, copper, and wireless based distribution systems.
                      </p>
                      <p>
                        Huawei, Cisco, IP phone, CCTV
                      </p>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={itAssist} width="100px" />
                    </div>
                    <div className="service__title">
                      <h3>IT ASSIST & CONSULTANCY</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        We advise organizations on how best to use information technology (IT) 
                        in achieving their business objectives.
                      </p>
                      <p>
                        And we provide the assisting and support to actualize company's business objectives.
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={softwareWeb} width="100px" />
                    </div>
                    <div className="service__title">
                      <h3>SOFTWARE & WEB DEVELOPMENT</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        We develop user-facing software and websites, that suit your business and company work flow.
                      </p>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="6" md="6">
                  <div className="service__item text-center">
                    <div className="service__icon">
                      <img src={systemDev} width="100px" />
                    </div>
                    <div className="service__title">
                      <h3>SYSTEM DEVELOPMENT</h3>
                    </div>
                    <div className="service__detail">
                      <p>
                        We enable your business to leverage the combined benefits of IT consulting and business process 
                        outsourcing by adopting a unified view of your processes and applications. 
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
 
export default Services;