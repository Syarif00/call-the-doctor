import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import consultant from "../assets/consultant.png";

const Consultant = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="bg-primary position-relative">
        <div className="consultant position-absolute text-center p-5 mx-auto m-5 ">
          <p className="text-white fw-bold fs-1 fs-sm-6 ">
            Get a Free Consultation!
          </p>
          <Button
            variant="success"
            href="/"
            className="btn p-md-2 text-white rounded-pill  fw-semibold"
          >
            Daftar Sekarang
          </Button>
        </div>
        <Image src={consultant} className="object-fit-cover" />
        <Col className="bg-primary"></Col>
      </Row>
    </Container>
  );
};

export default Consultant;
