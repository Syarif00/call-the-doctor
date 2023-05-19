import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const Step = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="mt-4 text-center">
          <h2 className="fs-1 fw-bold text-primary">Langkah Pemesanan</h2>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center">
        <Col md className="m-auto">
          <Image src={step1} className="mx-auto d-block img-fluid w-md-50" />
          <p className="mt-2 text-center fs-5 fw-normal">
            Memesan melalui aplikasi/nomor call center/web
          </p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={step2}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">
            Aplikasi mencarikan tenaga medis terdekat dari lokasi anda{" "}
          </p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={step3}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">
            Tenaga medis datang melakukan pemeriksaan/ perawatan
          </p>
        </Col>
        <Col md className="m-auto">
          <Image
            src={step4}
            className="mx-auto d-block img-fluid w-md-50"
            items-center
          />
          <p className="mt-2 text-center fs-5 fw-normal">
            Pembayaran tunai/ non tunai
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Step;
