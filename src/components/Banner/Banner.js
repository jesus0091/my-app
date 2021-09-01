import React from "react";
import { Carousel, Container } from "react-bootstrap";
import img_1 from "./image/image-01.png";
import img_2 from "./image/image-02.png";
import img_3 from "./image/image-03.png";
import img_4 from "./image/image-04.png";

const Banner = ({ greeting }) => {
  return (
    <div className="fluid greeting">
      <Container>
        <Carousel className="carouselHome greetingCard">
          <Carousel.Item className="bannerImg">
            <img className="d-block" src={img_1} alt="First slide" />
            <Carousel.Caption className="captionC">
              <h3>3, 6 y 12 cuotas</h3>
              <p>Con VISA o Master</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bannerImg">
            <img className="d-block" src={img_2} alt="Second slide" />
            <Carousel.Caption className="captionC">
              <h3>Entrega a Domicilio</h3>
              <p>con el envio mas seguro del pais</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bannerImg">
            <img className="d-block" src={img_3} alt="Third slide" />
            <Carousel.Caption className="captionC">
              <h3 style={{ color: "#fff" }}>Los mejores productos</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bannerImg">
            <img className="d-block" src={img_4} alt="Third slide" />
            <Carousel.Caption className="captionC">
              <h3>Tu decoración</h3>
              <p>a un click de distancia</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
