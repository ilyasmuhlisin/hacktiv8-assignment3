import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <>
      <Container id="about">
        <div>
          <h1>ILYAS MUHLISIN</h1>
          <h5 className="red-text">+6281228892447</h5><br />
          <p>
            Mahasiswa semester akhir jurusan teknik informatika di universitas
            muhammadiyah surakarta. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <div>
            <i class="fa-brands fa-linkedin fa-2xl"></i>{"  "}
            <i class="fa-brands fa-github fa-2xl"></i>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
