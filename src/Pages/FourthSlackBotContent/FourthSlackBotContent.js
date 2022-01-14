import React from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import botbot from '../../assets/botbot.png';
const FourthSlackBotContent = () => {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <div>
                <img width="100%" src={botbot} alt="" />{' '}
              </div>
            </Col>
            {/* Images */}
            <Col sm={12} lg={6}>
              <div className="divContent">
                <div>
                  <h1 className="textColors">
                    A Slack-bot for Createing <br />
                    and Maneging Prototypes
                  </h1>
                  <p className="textColors">
                    Buliding something special? We are always looking to work
                    <br />
                    with partenrs who want who wants to help the world bring
                    their ieds <br />
                    to Life
                  </p>
                </div>
                {/* Button Div */}
                <div className="my-5  button">
                  <Row>
                    <Col lg={6} sm={12}>
                      <div className="text-center my-1">
                        <Button className="p-3" variant="info">
                          {' '}
                          Become A partner
                        </Button>
                      </div>{' '}
                    </Col>

                    <Col lg={6} sm={12}>
                      <div className="text-center">
                        <Button className="p-3 my-1" variant="light">
                          {' '}
                          View intergation
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FourthSlackBotContent;
