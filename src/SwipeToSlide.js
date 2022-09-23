import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Image, Card } from "react-bootstrap";
import video from "../src/videos/video.mp4";

export default class SwipeToSlide extends Component {

    
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      arrows: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #BADA55`
        );
      },
    };  

    
    return (
      <div className="container">
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div className="bg-primary">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="p-0">
                <video
                  className=" slider-video vidio"
                  src={video}
                  loop
                  autoPlay
                  mute
                  loading="lazy"
                  style={{ width: "18rem" }}
                ></video>

                {/* <Image className="d-inline-flex view" src="/images/eye.png" /> */}
                <div className="view d-inline-flex">
                  <i className="fa fa-eye  f-icon" aria-hidden="true"></i>

                  {/* <i class="fa fa-play"></i> */}
                  <span className="d-inline-flex">678</span>
                  <span className="timer"> 00:25 </span>
                </div>
              </Card.Body>
              <Card.Body>
                <div className="vidio">
                  <span>
                    {" "}
                    <Image className="imagesmall" src="/images/car.jpg" />{" "}
                  </span>
                  <h5 className="text-center pt-4 font">
                    {" "}
                    <b>Mini Beetle</b>
                  </h5>
                  <p className="text-center pt-5 font">
                    {" "}
                    <b>₹ 549</b>
                  </p>
                  {/* <ProgressBar
                    className="mr-3"
                    now="40"
                    style={pbar}
                    variant="secondary"
                  /> */}
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="bg-warning">
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
