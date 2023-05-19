import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";

const Services = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-4 text-center">
          <h2 className="fs-1 fw-bold text-primary">Layanan Kami</h2>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col md className="m-auto">
          <Image src={service1} className="mx-auto d-block img-fluid w-md-50" />
          <p className="mt-2 text-center fs-5 fw-normal">Fisioterapi</p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={service2}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">Medical Checkup</p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={service3}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">Vaksinasi</p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={service4}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">Perawatan Medis</p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={service5}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">Dokter Visit</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
