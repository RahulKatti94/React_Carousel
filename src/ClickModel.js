import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { render } from '@testing-library/react';
import video from '../src/videos/video.mp4'
import { Image , Container } from 'react-bootstrap';
import Slider from "react-slick";
import car from '../src/videos/car.mp4'
import girl from '../src/videos/girl.mp4'
import kid from '../src/videos/kid.mp4'
import main from '../src/videos/main.mp4'
import rabit from '../src/videos/rabit.mp4'
import toy from '../src/videos/toy.mp4'
import { Card, ProgressBar } from "react-bootstrap";

export default function ClickModel(props) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const mystyle = {
    width: "50rem",
    height: "89rem ",

  }
  const pbar = {
    width: "20rem",
    height: "0.45rem",
    position: "absolute",
    right: "-1rem",
    top: "10.7rem",





  }
  return (

    // <Container>
    //   <Slider className="slide" {...settings}>

    //       <Modal
    //         {...props}
    //         size="lg"
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <div>  

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>

    //         </Modal.Body>
    //         <Modal.Header>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //           <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         {/* <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body>
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header> 
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body> 
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body> 
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body> 
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body> 
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div>

    //         <div>

    //         <Modal.Body className='p-0'>
    //           <video
    //             className="slider-video vidio"
    //             src={video}
    //             loop
    //             autoPlay
    //             mute
    //             loading="lazy"
    //             style={mystyle}></video>
    //         </Modal.Body> 
    //         <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    //             <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
    //             <i class='fas fa-volume-mute'></i>
    //           </Modal.Title>
    //         </Modal.Header>
    //         <Modal.Footer>
    //           <i class="fa fa-share-alt" aria-hidden="true"></i>
    //           <i class="fa fa-question-circle" aria-hidden="true"></i>
    //           <Button onClick={props.onHide}>Close</Button>
    //           <Image className="imagesmall" src="/images/car.jpg" />
    //         </Modal.Footer>
    //         </div> */}
    //       </Modal>



    //   </Slider>
    // </Container>


    <Container>
      <Modal  {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Slider className="slide" {...settings}>

          <div className="swiper-slide ">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
              style={{width :"  "}}
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>
            
             <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>



          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>



           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>


          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>



           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}



          </div>

          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>



           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>
          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>



           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>
          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>



           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>

          <div className="swiper-slide">
          <video
              className=" slider-video vidio width"
              src={video}
              loop
              autoPlay
              mute
              loading="lazy"
            ></video>

            <Modal.Header closeButton>

              <Modal.Title id="contained-modal-title-vcenter">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                <p>Mini Toy Cars - Mini Hummer | Mini Ferrari | ...</p>
                <i class='fas fa-volume-mute'></i>
              </Modal.Title>

            </Modal.Header>

    

           
            <Modal.Footer>

              <i class="fa fa-share-alt" aria-hidden="true"></i>
              <i class="fa fa-question-circle" aria-hidden="true"></i>
              <Button onClick={props.onHide}>Close</Button>
              <Image className="imagesmall" src="/images/car.jpg" />

            </Modal.Footer>
            {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}




          </div>
          {/* <div>
<video
className="slider-video vidio width"
src={video}
loop
autoPlay
muted
loading="lazy"
style={{ width: "20rem" }}></video>
// <Image className="d-inline-flex" src = "/images/eye.png" />
<i className="fa fa-eye f-icon" aria-hidden="true"></i>
<span className="d-inline-flex">120</span>
<span className="timer"> 00:18 </span>

<Image className="imagesmall" src="/images/car.jpg" /> 
<h5 className="text-center pt-4 font"> <b> Mini Hummer</b>s</h5>
<P className = "pt-5 font"> <b> ₹  549</b> </P> 
</div> */}
        </Slider>

      </Modal>
    </Container>
  );

}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ClickModel
        show={modalShow}
        onHide={() => setModalShow(false)}

      />
    </>
  )
}
render(<App />);
