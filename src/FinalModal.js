import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Carousel } from 'react-bootstrap';
import video from '../src/videos/video.mp4'

const FinalModal = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const videoInfo = {
        width: "20rem",
        height: "2rem",
        // alignitems: "center",
        // flexDirection: 'row',
        alignItems: 'center',

    }
    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton> </Modal.Header>
                <Modal.Body>

                    <Carousel fade style={videoInfo}>

                        <Carousel.Item>
                            <video
                                className=" slider-video modelview"
                                src={video}
                                loop
                                autoPlay
                                mute
                                loading="lazy"

                            ></video>

                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <video
                                className=" slider-video vidio modelview"
                                src={video}
                                loop
                                autoPlay
                                mute
                                loading="lazy"

                            ></video>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <video
                                className=" slider-video vidio modelview"
                                src={video}
                                loop
                                autoPlay
                                mute
                                loading="lazy"

                            ></video>

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>


            </Modal>
        </>
    );
}
export default FinalModal