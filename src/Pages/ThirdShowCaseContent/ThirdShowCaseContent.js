import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import showcase from '../../assets/showcase.png';
import './ThirdShowCaseContent.css';
const ThirdShowCaseContent = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <div className="divContent">
              <div>
                <h1 className="textColors">
                  ShowCase Your App In Our <br />
                  integrations directory
                </h1>
                <p className="textColors">
                  Buliding something special? We are always looking to work
                  <br />
                  with partenrs who want who wants to help the world bring their
                  ieds <br />
                  to Life
                </p>
              </div>
              {/* Button Div */}
              <div className="my-5  button">
                <Row>
                  <Col>
                    {' '}
                    <Button className="p-3" variant="info">
                      {' '}
                      Submit Your App
                    </Button>
                  </Col>

                  <Col>
                    <Button className="p-3" variant="light">
                      {' '}
                      View Api Docse
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          {/* Images */}
          <Col sm={12} lg={6}>
            <div>
              <img width="100%" src={showcase} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThirdShowCaseContent;
