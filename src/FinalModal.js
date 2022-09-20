import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Image, Card } from "react-bootstrap";
import video from "../src/videos/video.mp4";
import Slider from "react-slick";
import car from "../src/videos/car.mp4";
import girl from "../src/videos/girl.mp4";
import kid from "../src/videos/kid.mp4";
import main from "../src/videos/main.mp4";
import rabit from "../src/videos/rabit.mp4";
import toy from "../src/videos/toy.mp4";
const FinalModal = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centered: true,
    arrows : false
  };
  const clickModal = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="text-center">
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 button-border"
          variant="dark"
          onClick={() => handleShow(v)}
        >
          <i className="fa fa-play icon-size"></i>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}

      <Modal
        className="cross-button h-100"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        {/* <div className='' > */}

        <Modal.Body closeButton className="modal-class">
          <Slider {...settings}>
            <div className="position-relative">
              <Card className="modal-background-color card">
                <div className="card-header">
                  <i className="fa fa-ellipsis-v " aria-hidden="true"></i>
                  <p className="txt ">
                    Mini Toy Cars - Mini Hummer | Mini Ferrari | ...
                  </p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>

                <video
                  className=" slider-video vidio"
                  src={video}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex">
                    <Image
                      className="modalimage image-border"
                      src="/images/car.jpg"
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt">Wooden Christmas Toys</p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>

                <video
                  className=" slider-video vidio"
                  src={main}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>

                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/woden.jpg" />
                      <p className="">
                        {" "}
                        <b>
                          Wooden Christma... <br />₹99 <nbsp /> 
                        </b>
                        ₹1̶9̶9̶
                      </p>{" "}
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>

                  <p className="txt ">Mini BMW Convertible</p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>

                <video
                  className=" slider-video vidio"
                  src={car}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/redcar.jpg" />
                      <p className="">
                        {" "}
                        <b>
                          Mini BMW Sedan <br />₹ 599
                        </b>
                      </p>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt">Little Rabbit</p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>
                <video
                  className=" slider-video vidio"
                  src={toy}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>

                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/Rrabbit.jpg" />
                      <p className="">
                        {" "}
                        <b>
                          Little Rabbit <br />₹ 599
                        </b>
                      </p>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt">Doll House</p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>
                <video
                  className=" slider-video vidio"
                  src={kid}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>

                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/doll.jpg" />
                      <p className="">
                        {" "}
                        <b>
                          Doll House <br />₹ 899
                        </b>
                      </p>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt">Cute Bunny</p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>
                <video
                  className=" slider-video vidio"
                  src={rabit}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/bunny.jpg" />
                      <p className="">
                        {" "}
                        <b>
                          Cute Bunny <br />₹ 699
                        </b>
                      </p>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="position-relative">
              <Card className="modal-background-color">
                <div className="card-header p-0 m-0">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt">Brown Teddy </p>
                  <span className="icon-border">
                    <i className="fas fa-volume-mute doticons"></i>
                  </span>
                  <span className="icon-border">
                    <i className="fa-solid fa-xmark doticons"></i>
                  </span>
                </div>
                <video
                  className=" slider-video vidio"
                  src={girl}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body className="modalcard">
                  <div className="d-flex">
                    <span className="footer-border me-2">
                      <i
                        className="fa fa-share-alt footer-icon "
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="footer-border">
                      <i className="fa-regular fa-circle-question footer-icon"></i>
                    </span>
                  </div>
                  <div className="d-flex smallcard-border">
                    <Card className="image-text flex-row">
                      <Image className="modalimage" src="/images/teddy.jpg" />
                      <p className="modal-paratag">
                        {" "}
                        <b>
                          Brown Teddy <br />₹ 999</b></p>{" "}
                      
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default FinalModal;
