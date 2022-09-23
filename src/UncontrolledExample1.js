import { Carousel, Card, Container } from "react-bootstrap";
import React from "react";
import video from "../src/videos/video.mp4";

function UncontrolledExample1() {
  const videobar = {
    height: "auto",
    width: "25rem",
  };
  return (
    <Container>
      <div className="justify-content-center">
        <Card style={videobar}>
          <Carousel className="">
            <Carousel.Item className="bg-primary">
              <video
                className=" slider-video vidio"
                src={video}
                loop
                autoPlay={true}
                mute
                loading="lazy"
                style={videobar}
              ></video>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  arouselItem, CloseButton, Col, Collapse, Container, Dropdown,
                  DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck,
                  FormControl, FormFloating, FormGroup, FormLabel, FormSelect,
                  FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal,
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="bg-primary">
              <video
                className=" slider-video vidio"
                src={video}
                loop
                autoPlay={true}
                mute
                loading="lazy"
                style={videobar}
              ></video>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  arouselItem, CloseButton, Col, Collapse, Container, Dropdown,
                  DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck,
                  FormControl, FormFloating, FormGroup, FormLabel, FormSelect,
                  FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal,
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="bg-primary">
              <video
                className=" slider-video vidio"
                src={video}
                loop
                autoPlay={true}
                mute
                loading="lazy"
                style={videobar}
              ></video>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  arouselItem, CloseButton, Col, Collapse, Container, Dropdown,
                  DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck,
                  FormControl, FormFloating, FormGroup, FormLabel, FormSelect,
                  FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal,
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
    </Container>

    /* <Carousel.Item className="bg-warning">
        <video
          className=" slider-video vidio"
          src={video}
          loop
          mute
          loading="lazy"
          style={{ width: "18rem" }}
          autoPlay={true}
          ></video>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bg-info">
        <video
          class="img-fluid"
          autoPlay={true}
          loop
          muted
          style={{ width: "18rem" }}
        >
          <source src={video} />
        </video>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */
  );
}

export default UncontrolledExample1;
