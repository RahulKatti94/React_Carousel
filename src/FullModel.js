import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Card, ProgressBar, Button } from "react-bootstrap";
import Slider from "react-slick";
import video from '../src/videos/video.mp4'
import { Image } from 'react-bootstrap';
import car from '../src/videos/car.mp4'
import girl from '../src/videos/girl.mp4'
import kid from '../src/videos/kid.mp4'
import main from '../src/videos/main.mp4'
import rabit from '../src/videos/rabit.mp4'
import toy from '../src/videos/toy.mp4'

const FullModel = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    var settings = {
        dots: false,
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
    const pbar = {
        width: "20rem",
        height: "0.45rem",
        position: "absolute",
        right: "-1rem",
        top: "10.7rem",





    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2 button-border" variant="dark" onClick={() => handleShow(v)}><i class="fa fa-play"></i>
                    
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className="color">
                <Modal.Header closeButton></Modal.Header>
                
                    <Slider className="slide" {...settings}>

                        <div className="swiper-slide">


                            <Card className='card-height'

                            >
                                <Card.Body className="p-0">

                                    <video
                                        className=" slider-video vidio"
                                        src={video}
                                        loop
                                        autoPlay
                                        mute
                                        loading="lazy"
                                        ></video>
                                    {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                                    <div className="view d-inline-flex">
                                        <div class="SSV-play-btn click">

                                            <label></label>
                                        </div>
                                        <i className="fa fa-eye  f-icon" aria-hidden="true"></i>

                                        <i class="fa fa-play"></i>
                                        <span className="d-inline-flex">678</span>
                                        <span className="timer"> 00:25 </span>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="vidio">
                                        <span> <Image className="imagesmall" src="/images/car.jpg" /> </span>

                                        <h5 className="text-center pt-4 font"> <b>Mini Beetle</b></h5>
                                        <p className="text-center pt-5 font"> <b>₹  549</b></p>
                                        <ProgressBar className="mr-3" now='40' style={pbar} variant="secondary" />


                                    </div>

                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={main}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
                                    {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                                    <div className="view d-inline-flex">
                                        <i className="fa fa-eye f-icon" aria-hidden="true"></i>
                                        <span className="d-inline-flex">223</span>
                                        <span className="timer"> 00:14 </span>

                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className="vidio">
                                        <Image className="imagebig" src="/images/woden.jpg" />
                                        <h5 className="text-center pt-4 font"><b> wooden Christmas Toys</b></h5>
                                        <p className="text-center pt-5 font"> <b> ₹ 99    ₹1̶9̶9̶ </b></p>



                                    </div>


                                </Card.Body>


                            </Card>

                        </div>


                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={car}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
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
                                        <h5 className="text-center pt-4 font"> <b>Mini BMW Sedan</b></h5>
                                        <p className="text-center pt-5 font">  <b> ₹  599</b></p>

                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={toy}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
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
                                        <h5 className="text-center pt-4 font"><b>Little Rabbit</b></h5>
                                        <p className="text-center pt-5 font"> <b> ₹  599</b></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={kid}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
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
                                        <h5 className="text-center pt-4 font"><b>Doll House</b></h5>
                                        <p className="text-center pt-5 font"> <b > ₹  899</b></p>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={rabit}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
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
                                        <h5 className="text-center pt-4 font"><b>Cute Bunny</b></h5>
                                        <p className="text-center pt-5 font">  <b> ₹  699</b></p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='card-height'
                                
                            >
                                <Card.Body className="p-0">
                                    <video
                                        className="slider-video vidio"
                                        src={girl}
                                        loop
                                        autoPlay
                                        muted
                                        loading="lazy"
                                        ></video>
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
                                        <h5 className="text-center pt-4 font"> <b>Brown Teddy</b></h5>
                                        <p className="text-center pt-5 font"> <b> ₹  999</b></p>
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
              <h5 className="text-center pt-4 font"> <b> Mini Hummer</b>s</h5>
            <P className = "pt-5 font"> <b> ₹  549</b> </P> 
            </div> */}

                    </Slider>
                
            </Modal>


        </  >
    )
}

export default FullModel








