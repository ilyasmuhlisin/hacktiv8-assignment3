import React from 'react'
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function Awards() {
  return (
    <Container id="about">
      <div>
        <h1>Awards & Certificate</h1> <br />
        <ListGroup>
          <ListGroup.Item as="li">
            <i class="fa-solid fa-award"></i> Bootcamp Binar
            Academy(Certificate)
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <i class="fa-solid fa-award"></i> Ketua Panitia Organisasi Kampus(Certificate)
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <i class="fa-solid fa-award"></i> Sekertaris Organisasi Kampus(Certificate)
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
}

export default Awards
