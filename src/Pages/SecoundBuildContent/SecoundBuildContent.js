import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import apiTeam from '../../assets/apiTeam.png';
import graphQL from '../../assets/graphQL.png';
import superchargeWorkflow from '../../assets/superchargeWorkflow.png';
import './SecoundBuildContent.css';
const SecoundBuildContent = () => {
  return (
    <div className="">
      <Container>
        <div>
          <div>
            <h1 className="text-center textColor">
              Experience the freedom to build
            </h1>
            <h1 className="text-center textColor">features,right away .</h1>
            <p className="text-center textColor">
              You can now harness components of our platform and build powerfull
              <br />
              integration for our 2 million users or simply just for your team
            </p>
          </div>
          {/* Conainer Part */}
          <div>
            <Row>
              {/* Col-1 */}
              <Col sm={12} lg={4} md={4}>
                <div>
                  <div>
                    <img width="100%" src={apiTeam} alt="" />
                  </div>
                  <h3 className="textColor text-center">Dedicated Api Team</h3>
                  <p className="text-muted text-center ">
                    Our Team are available for users question via <br />
                    our slack developer Community and Email
                  </p>
                </div>
              </Col>
              {/* Col-2 */}
              <Col sm={12} md={4} lg={4}>
                <div>
                  <div>
                    <img width="100%" src={graphQL} alt="" />
                  </div>
                  <h3 className="textColor text-center">
                    Our Api uses Graph QL
                  </h3>
                  <p className="text-muted text-center">
                    Our Team are available for users question via <br />
                    our slack developer Community and Email
                  </p>
                </div>
              </Col>
              {/* Col-3 */}
              <Col sm={12} md={4} lg={4}>
                <div>
                  <div>
                    <img width="100%" src={superchargeWorkflow} alt="" />
                  </div>
                  <h3 className="textColor text-center">
                    SuperCharage your Workflow
                  </h3>
                  <p className="text-muted text-center">
                    Our Team are available for users question via <br />
                    our slack developer Community and Email
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecoundBuildContent;
