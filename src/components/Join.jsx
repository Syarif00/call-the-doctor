import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import join from "../assets/join.png";

const Join = () => {
  return (
    <Container fluid className="join pt-5">
      <Row className="d-flex justify-content-center flex-lg-row">
        <Col className="my-auto ms-5 ">
          <h1 className="text-white">Ayo bergabung bersama CTD</h1>
          <p className="text-white">
            Dapatkan pengalaman, penghasilan tambahan, dan program pelatihan
          </p>
          <Button variant="success" className="rounded-pill">
            Daftar Sekarang
          </Button>
        </Col>
        <Col>
          <Image src={join} className="img-fluid"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Join;
