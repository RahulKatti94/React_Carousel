import { Card } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'
import car from '../src/videos/car.mp4'
import girl from '../src/videos/girl.mp4'
import kid from '../src/videos/kid.mp4'
import main from '../src/videos/main.mp4'
import rabit from '../src/videos/rabit.mp4'
import toy from '../src/videos/toy.mp4'
import video from '../src/videos/video.mp4'
export default function Short() {
    return (
        <div className="container">

<div className="row no-wrap">

            <Carousel>s


                <Carousel.Item>
                    
                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={car}
                                
                            ></video> 
                             <Carousel.Caption>

                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            </Carousel.Caption>
                            </Card>
                            </Carousel.Item>

                            <Carousel.Item>
                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={girl}
                                
                            ></video>
                            <Carousel.Caption>


                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            </Carousel.Caption>
                            </Card>
                        </Carousel.Item>

                        <Carousel.Item>

                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={kid}
                                
                            ></video> 
                            
                            <Carousel.Caption>

                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>

                            </Card>
                        </Carousel.Item>
                        <Carousel.Item>

                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={main}
                                
                            ></video> 
                            <Carousel.Caption>

                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            </Carousel.Caption>
                            </Card>
                        </Carousel.Item> 
                        <Carousel.Item>

                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={rabit}
                                
                            ></video> 
                            <Carousel.Caption>

                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                       </Carousel.Caption> 
                       </Card>
                        </Carousel.Item> 
                            <Carousel.Item>

                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={toy}
                                
                            ></video>
                            
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            </Carousel.Caption>
                            </Card>
                        </Carousel.Item> 
                        <Carousel.Item>

                        <Card style={{ width: "40rem" }}>
                            <video
                                className="slider-video"
                                src={video}
                                
                            ></video>

                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Card>
                        </Carousel.Item>
                   
                

            </Carousel>
            </div>

        </div>
    )
}

