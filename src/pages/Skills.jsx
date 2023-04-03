import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills() {
  return (
    <Container id="skills">
      <div>
        <h1>Skills</h1> <br />
        <ListGroup>
          <Row>
            <Col md={3}>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> HTML
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> CSS
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> Javascript
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> Bootstrap
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> MongoDB
              </ListGroup.Item>
            </Col>
            <Col md={3}>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> MySQL
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> PostgreSQL
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> ExpressJs
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> NodeJs
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> NextJs
              </ListGroup.Item>
            </Col>
            <Col>
              <ListGroup.Item as="li">
                <i className="fa-solid fa-circle-check"></i> ReactJs
              </ListGroup.Item>
            </Col>
          </Row>
        </ListGroup>
      </div>
    </Container>
  );
}

export default Skills;
