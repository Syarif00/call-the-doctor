import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <Container fluid className=" mt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="my-auto ms-5 bg-primary">
            <Image src={logo} className="position-absolute mt-5"></Image>
          </Col>
          <Col>
            <h4>Pages</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Dokter
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Perawatan
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Fisioterapi
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Lab
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="text-decoration-none text-dark">
                  Lainnya
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Hubungi Kami</h4>
            <NavLink to="/" className="text-decoration-none text-dark">
              Service Reservation: 123-456-7890
            </NavLink>
          </Col>
          <Col>
            <h4>Social</h4>
            <Image src={facebook} className="" ></Image>
            <Image src={instagram} className="ms-3" ></Image>
            <Image src={twitter} className="ms-3" ></Image>
            <Image src={youtube} className="ms-3" ></Image>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
