import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo-white.svg';
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} lg={2}>
            <div>
              <img src={logo} alt="" />
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView">OverView</h4>
              <ul className="ul">
                <li>Why Marvel</li>
                <li>Enterprise</li>
                <li>Priceing</li>
                <li>requested a damo</li>
                <li>Explore</li>
                <li>Apps</li>
                <li>Developer APi</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView">Features</h4>
              <ul className="ul">
                <li>WireFraming</li>
                <li>Desgin</li>
                <li>Prototpes</li>
                <li>requested a damo</li>
                <li>Explore</li>
                <li>Apps</li>
                <li>Developer APi</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView">Support</h4>
              <ul className="ul">
                <li>Call center</li>
                <li>Tearms Of Services</li>
                <li>Privacy</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView">Marvel</h4>
              <ul className="ul">
                <li>Blog </li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>success story</li>
                <li>Brand Guild lines</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView">Follow</h4>
              <ul className="ul">
                <li>Twiter </li>
                <li>Dribble</li>
                <li>FaceBook</li>
                <li> github</li>
                <li>workable</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
