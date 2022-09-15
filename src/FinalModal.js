import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Image, Card, CloseButton } from "react-bootstrap";
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

  //   const videoInfo = {
  //     width: "20rem",
  //     height: "2rem",

  //     alignItems: "center",
  //   };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centered: true,

    // appendDots: dots => (
    //     <div

    //     >
    //         <ul style={{ margin: "10px" }}> {dots} </ul>
    //     </div>
    // ),
  };
  const clickModal = {
    // height: "54rem",
    width: "100%",
  };

  return (
    <div className=" container-fluid text-center">
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 button-border"
          variant="dark"
          onClick={() => handleShow(v)}
        >
          <i className="fa fa-play"></i>

          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}

      <Modal
        className="cross-button"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        {/* <div className='' > */}

        <Modal.Body closeButton className="modal-class">    
          <Slider {...settings}>
            <div className="position-relative">
              <Card className="modal-background-color">
                {/* <div className='modalvideo'> */}
                {/* <Modal.Header className='text-primary' closeButton> </Modal.Header> */}
                {/* <CloseButton  className='closedbutton'/> */}    
                <div className="card-header">
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <p className="txt ">Mini Toy Cars - Mini Hummer | Mini Ferrari | ... </p>
                  <i class="fas fa-volume-mute"></i>
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
                <Card.Body>
                  <div className="d-flex">
                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
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
                {/* <Modal.Header className='text-primary' closeButton> </Modal.Header> */}
                {/* <CloseButton  className='closedbutton'/> */}
                <video
                  className=" slider-video vidio"
                  src={main}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={clickModal}
                ></video>
                <Card.Body>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  <h4>Wooden Christmas Toys</h4>
                  <i class="fas fa-volume-mute"></i>
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                  <i class="fa fa-question-circle" aria-hidden="true"></i>
                  <div>
                    <Image
                      className="modalimage d-inline-flex"
                      src="/images/woden.jpg"
                    />
                    <p className="">
                      {" "}
                      <b>
                        Wooden Christma... <br />₹ 999
                      </b>{" "}
                      ₹1̶9̶9̶{" "}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* <div className="modalvideo">
               <Modal.Header className='text-primary' closeButton> </Modal.Header> 
               <CloseButton  className='closedbutton'/> 
              <video
                className=" slider-video vidio"
                src={car}
                loop
                autoPlay
                mute
                loading="lazy"
                style={clickModal}
              ></video>

              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <h4>Mini BMW Convertible </h4>
              <i class="fas fa-volume-mute"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div>
                <Image className="modalimage" src="/images/redcar.jpg" />
                <p className="">
                  {" "}
                  <b>
                    Mini BMW Sedan <br />₹ 599
                  </b>
                </p>
              </div>
            </div> */}

            {/* <div className="modalvideo">
               <Modal.Header className='text-primary' closeButton> </Modal.Header> 
               <CloseButton  className='closedbutton'/>
              <video
                className=" slider-video vidio"
                src={toy}
                loop
                autoPlay
                mute
                loading="lazy"
                style={clickModal}
              ></video>

              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <h4>Little Rabbit </h4>
              <i class="fas fa-volume-mute"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div>
                <Image className="modalimage" src="/images/Rrabbit.jpg" />
                <p className="">
                  {" "}
                  <b>
                    Little Rabbit <br />₹ 599
                  </b>
                </p>
              </div>
            </div> */}

            {/* <div className="modalvideo">
               <Modal.Header className='text-primary' closeButton> </Modal.Header>
               <CloseButton  className='closedbutton'/> 
              <video
                className=" slider-video vidio"
                src={kid}
                loop
                autoPlay
                mute
                loading="lazy"
                style={clickModal}
              ></video>

              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <h4>Doll House </h4>
              <i class="fas fa-volume-mute"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div>
                <Image className="modalimage" src="/images/doll.jpg" />
                <p className="">
                  {" "}
                  <b>
                    Doll House <br />₹ 899
                  </b>
                </p>
              </div>
            </div> */}

            {/* <div className="modalvideo">
              <Modal.Header className='text-primary' closeButton> </Modal.Header>
              <CloseButton  className='closedbutton'/>
              <video
                className=" slider-video vidio"
                src={rabit}
                loop
                autoPlay
                mute
                loading="lazy"
                style={clickModal}
              ></video>

              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <h4>Cute Bunny</h4>
              <i class="fas fa-volume-mute"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div>
                <Image className="modalimage" src="/images/bunny.jpg" />
                <p className="">
                  {" "}
                  <b>
                    Cute Bunny <br />₹ 699
                  </b>
                </p>
              </div>
            </div> */}

            {/* <div className="modalvideo">
              <Modal.Header className='text-primary' closeButton> </Modal.Header>
              <CloseButton  className='closedbutton'/>
              <video
                className=" slider-video vidio"
                src={girl}
                loop
                autoPlay
                mute
                loading="lazy"
                style={clickModal}
              ></video>

              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              <h4>Brown Teddy </h4>
              <i class="fas fa-volume-mute"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <div>
                <Image className="modalimage" src="/images/teddy.jpg" />
                <p className="">
                  {" "}
                  <b>
                    Brown Teddy <br />₹ 999
                  </b>
                </p>
              </div>
            </div>  */}
          </Slider>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default FinalModal;
