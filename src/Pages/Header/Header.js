import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import logos from '../../assets/logo-white.svg';
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logos} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">| Developers</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Why Marvel</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Enterprice
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                priceing
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sign In
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button style={{ height: '2.1rem' }} variant="light">
                  <div> Sign Up Free</div>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
