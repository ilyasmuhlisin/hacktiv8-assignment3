import React from "react";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function Navbar() {
  return (
    <div id="navbar" style={{ fontWeight: "600", backgroundColor: "#BC5B3C" }}>
      <Container className="text-center">
        <Nav defaultActiveKey="/about" as="ul" className="wrap">
          <Row>
            <LinkContainer to="/">
              <Image className="rounded-circle" src="./images/ily.jpeg" />
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to="/about" activeClassName="active">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience" activeClassName="active">
              <Nav.Link>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/education" activeClassName="active">
              <Nav.Link>Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/skills" activeClassName="active">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/interests" activeClassName="active">
              <Nav.Link>Interest</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/awards" activeClassName="active">
              <Nav.Link>Awards</Nav.Link>
            </LinkContainer>
          </Row>
        </Nav>
      </Container>
    </div>
  );
}

export default Navbar;
