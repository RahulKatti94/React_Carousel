import React, { Component } from "react";
import { Container, Card, } from "react-bootstrap";
import Slider from "react-slick";
import video from '../src/videos/video.mp4'
import car from '../src/videos/car.mp4'
import girl from '../src/videos/girl.mp4'
import kid from '../src/videos/kid.mp4'
import main from '../src/videos/main.mp4'
import rabit from '../src/videos/rabit.mp4'
import toy from '../src/videos/toy.mp4'
import { Image } from 'react-bootstrap';

export default class Responsive extends Component {
  render() {
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
    return (
      <div><br /><br /><br /><br />
        {/* <h1 className="text-center"> Responsive </h1> */}
        <Container>
          <Slider className="slide" {...settings}>

            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">

                  <video
                    className="slider-video vidio"
                    src={video}
                    loop
                    autoPlay
                    mute
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                    <i className="fa fa-eye  f-icon" aria-hidden="true"></i>
                    <span className="d-inline-flex">678</span>
                        <span className="timer"> 00:25 </span>
                        </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">
                    <Image className="imagesmall" src="/images/car.jpg" />

                    <h5 className="text-center"> <b>Mini Hummer</b></h5>
                    <p className="text-center"> <b>₹  549</b></p>

                  </div>
                </Card.Body>
              </Card>
            </div>



            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={main}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                    <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                    <span className="d-inline-flex">223</span>
                    <span className="timer"> 00:14 </span>
                    
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">
                    <Image className="imagesmall" src="/images/woden.jpg" />
                    <h5 className="text-center"><b> wooden Christmas Toys</b></h5>
                    <p className="text-center"> <b> ₹ 99    ₹1̶9̶9̶ </b></p>
                  </div>
                </Card.Body>
              </Card>
            </div>


            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={car}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                  <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                  <span className="d-inline-flex">439</span>
                  <span className="timer"> 00:08 </span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">
                    <Image className="imagesmall" src="/images/redcar.jpg" />
                    <h5 className="text-center"> <b>Mini BMW Sedan</b></h5>
                    <p className="text-center">  <b> ₹  599</b></p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={toy}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                  <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                  <span className="d-inline-flex">231</span>
                  <span className="timer"> 00:12 </span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">
                    <Image className="imagesmall" src="/images/Rrabbit.jpg" />
                    <h5 className="text-center"><b>Little Rabbit</b></h5>
                    <p className="text-center"> <b> ₹  599</b></p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={kid}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                  <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                  <span className="d-inline-flex">590</span>
                  <span className="timer"> 00:18 </span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">

                    <Image className="imagesmall" src="/images/doll.jpg" />
                    <h5 className="text-center"><b>Doll House</b></h5>
                    <p className="text-center"> <b > ₹  899</b></p>
                  </div>
                </Card.Body>
              </Card>

            </div>
            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={rabit}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                  <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                  <span className="d-inline-flex">121</span>
                  <span className="timer"> 00:07 </span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">

                    <Image className="imagesmall" src="/images/bunny.jpg" />
                    <h5 className="text-center"><b>Cute Bunny</b></h5>
                    <p className="text-center">  <b> ₹  699</b></p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card
                style={{ width: '18rem' }}
              >
                <Card.Body className="p-0">
                  <video
                    className="slider-video vidio"
                    src={girl}
                    loop
                    autoPlay
                    muted
                    loading="lazy"
                    style={{ width: "18rem" }}></video>
                  {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                  <div className="view d-inline-flex">
                  <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                  <span className="d-inline-flex">236</span>
                  <span className="timer"> 00:21 </span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="vidio">

                    <Image className="imagesmall" src="/images/teddy.jpg" />
                    <h5 className="text-center"> <b>Brown Teddy</b></h5>
                    <p className="text-center"> <b> ₹  999</b></p>
                  </div>
                </Card.Body>
              </Card>
            </div>
            {/* <div>
            <video
                className="slider-video vidio"
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
              <h5 className="text-center"> <b> Mini Hummer</b>s</h5>
              <b> ₹  549</b>
            </div> */}
          </Slider>
        </Container>
      </div >
    );  
  }
}