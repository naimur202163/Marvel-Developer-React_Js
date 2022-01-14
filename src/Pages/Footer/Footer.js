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
              <h4 className="overView text">OverView</h4>
              <ul className="ul">
                <li className="text">Why Marvel</li>
                <li className="text">Enterprise</li>
                <li className="text">Priceing</li>
                <li className="text">requested a damo</li>
                <li className="text">Explore</li>
                <li className="text">Apps</li>
                <li className="text">Developer APi</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView text">Features</h4>
              <ul className="ul">
                <li className="text">WireFraming</li>
                <li className="text">Desgin</li>
                <li className="text">Prototpes</li>
                <li className="text">requested a damo</li>
                <li className="text">Explore</li>
                <li className="text">Apps</li>
                <li className="text">Developer APi</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView text">Support</h4>
              <ul className="ul">
                <li className="text">Call center</li>
                <li className="text">Tearms Of Services</li>
                <li className="text">Privacy</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView text">Marvel</h4>
              <ul className="ul">
                <li className="text">Blog </li>
                <li className="text">Our Team</li>
                <li className="text">Contact Us</li>
                <li className="text">success story</li>
                <li className="text">Brand Guild lines</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div>
              <h4 className="overView text">Follow</h4>
              <ul className="ul">
                <li className="text">Twiter </li>
                <li className="text">Dribble</li>
                <li className="text"> FaceBook</li>
                <li className="text"> github</li>
                <li className="text">workable</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
