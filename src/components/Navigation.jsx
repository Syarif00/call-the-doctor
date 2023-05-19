import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{ height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" justify-content-center"
        >
          <Nav className="m-auto">
            <NavDropdown title="Dokter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tanya Dokter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home Visit Dokter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Perawatan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Perawat Medis
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Perawat & Bidan
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Fisioterapi</Nav.Link>
            <NavDropdown title="Vaksin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Vaksin Bayi & Anak
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Vaksin Rabies
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Suntik Vitamin
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lab" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Medical Check Up
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lainnya" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Alat Kesehatan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Obat & Resep Dokter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="#link">Ambulance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
