import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assests/Img/Logo.png";
import { GrLinkedinOption , GrFacebookOption ,GrTwitter ,GrInstagram } from 'react-icons/gr';
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="div_footer_container">
        <Container>
          <Row>
            <Col md="6" lg="6" sm="12">
              <div className="div_footer_title mb-3">
                <img src={Logo} alt="no-img" />{" "}
              </div>
              <p>
              Headquarters<br/>
Sapna Sangeeta road, 207, Capital Tower<br/> Indore, Madhya Pradesh 452001, IN
              </p>
            </Col>
            <Col md="3" lg="3" sm="12">
              <div className="div_footer_title mb-3">
                <h1>Link</h1>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Career">Career</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
              </ul>
            </Col>
            <Col md="3" lg="3" sm="12">
              <div className="div_footer_title mb-3">
                <h1>Contact</h1>
              </div>
              <ul>
                <li>
                  <Link to="/">9826722500</Link>
                </li>
                <li>
                  <Link to="/About">abc@gmail.com</Link>
                </li>
              </ul>




          


<div className="d-flex">
  <ul className="div_ul_box d-flex  ">
    <li>
      <Link to="/">
        <GrLinkedinOption className="text-white"/>
      </Link>
    </li>
    <li>
      <Link to="/">
        <GrFacebookOption className="text-white"/>
      </Link>
    </li>
    <li>
      <Link to="/">
        <GrTwitter className="text-white"/>
      </Link>
    </li>
    <li>
      <Link to="/">
        <GrInstagram className="text-white"/>
      </Link>
    </li>
  </ul>
</div>






            </Col>
          </Row>
        </Container>
      </div>
      <div className="div_footer_box">
        <div className="div_footer_copyright">
          <p>© AmpleSecure 2023 – All Rights Reserved</p>
        </div>
        <div className="div_footer_privacy_term">
          <Link to="">Privacy Policy</Link>
          <Link to="">Term and Condition</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;