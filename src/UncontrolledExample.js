import { Carousel, Card } from "react-bootstrap";
import React from "react";
import video from "../src/videos/video.mp4";

function UncontrolledExample() {
  return (
    <Carousel className="bg-danger">
      <Carousel.Item className="bg-primary">
        <div className="row justify-content-center">
          
          <Card style={{ width: "18rem" }}>
            <video
              className=" slider-video vidio"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
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
          </Card>
          <Card style={{ width: "18rem" }}>
            <video
              className=" slider-video vidio"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
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
          </Card>
          <Card style={{ width: "18rem" }}>
            <video
              className=" slider-video vidio"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
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
          </Card>
        </div>
      </Carousel.Item>
      <Carousel.Item className="bg-warning">
        <video
          className=" slider-video vidio"
          src={video}
          loop
          autoPlay
          mute
          loading="lazy"
          style={{ width: "18rem" }}
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
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
