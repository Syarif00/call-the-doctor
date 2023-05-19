import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import about from "../assets/about.png";

const About = () => {
  return (
    <Container fluid className="about mt-5">
      <Container>
        <Row>
          <Col>
            <Image src={about} fluid />
          </Col>
          <Col lg={8} className="mt-5">
            <h2 className="ms-3">"Kesehatan Anda, Prioritas Kami"</h2>
            <p className="mt-3 ms-3">
              Dengan layanan homecare dokter dan medical checkup yang dapat
              dilakukan di rumah Anda, kami ingin membuat perawatan kesehatan
              menjadi lebih mudah, nyaman dan aman. Jadilah prioritas untuk
              kesehatan Anda dan percayakan perawatan kesehatan Anda pada CTD.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
