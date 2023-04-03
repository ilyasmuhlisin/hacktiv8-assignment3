import React from "react";
import Container from "react-bootstrap/Container";
import About from "./About";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Skills from "./Skills";

function Home() {
  return (
    <Container id="home">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </Container>
  );
}

export default Home;
