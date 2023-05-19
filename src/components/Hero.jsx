/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="hero-image d-block w-100 object-fit-cover"
          src={hero1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="headline">
          <h1 className="text-white fw-bold fs-md-1">
            Pengobatan cukup dari rumah aja
          </h1>
          <p className=" fs-md-6 fw-md-medium">
            Membantu anda mendapatkan pelayanan kesehatan dari rumah dengan
            dokter dan tim medis yang berpengalaman
          </p>
          <Button variant="success"
            href="#"
            className="p-2 text-white rounded fs-6 fw-semibold"
          >
            Daftar Sekarang
          </Button>
        </div>
        <img
          className="hero-image d-block w-100 object-fit-cover"
          src={hero2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="hero-image d-block w-100 object-fit-cover"
          src={hero3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
