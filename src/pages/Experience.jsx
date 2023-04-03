import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience() {
  return (
    <Container id="experience">
      <div>
        <h1>EXPERIENCE</h1>
        <br />
        <Row>
          <Col>
            <h5>Bootcamp Binar Academy(MBKM)</h5>
            <p>
              Project terakhir membuat fullstack web e-commerce dengan PERN{" "}
            </p>
          </Col>
          <Col>
            <h6 className="red-text">Feb 2022 - Jul 2022</h6>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>BPRS Dana Amanah</h5>
            <p>
              Membuat Company profile(Reactjs) & Deploy{" "}
            </p>
          </Col>
          <Col>
            <h6 className="red-text">Sep 2022 - Nov 2022</h6>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Experience;
