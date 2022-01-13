import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import illustration from '../../assets/illustration.png';
import './Style.css';
const TopBuildContent = () => {
  return (
    <div style={{ backgroundColor: '#0C1014' }}>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div className="textContainer">
              <div>
                {' '}
                <h1 className="text">Lets Build The Build </h1>
                <h1 className="text">of desgin,now</h1>
              </div>
              <div>
                <p className="text">
                  Create amazing tools and intregation for 1 milion users or
                  coustomize Marvel for your team
                  <br />
                </p>
              </div>
              {/* Button */}
              <div className="my-5  button">
                <Row>
                  <Col>
                    {' '}
                    <Button className="p-2" variant="info">
                      {' '}
                      Submit Your App
                    </Button>
                  </Col>

                  <Col>
                    <Button className="p-2" variant="light">
                      {' '}
                      View Api Docse
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          {/* Banner Image Imported From Assets */}
          <Col sm={12} md={8} lg={8}>
            <div>
              <img width="100%" src={illustration} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBuildContent;
