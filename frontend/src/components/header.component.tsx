import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/"> */}
          <Navbar.Brand>Property App</Navbar.Brand>
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <LinkContainer to="/cart"> */}
              <Nav.Link>View Listings</Nav.Link>
              {/* </LinkContainer> */}
              {/* <LinkContainer to="/cart"> */}
              <Nav.Link>Expire Listings</Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
