import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
      <div>
        <h2> Responsive </h2>
        <Container>
          <Slider className="slide" {...settings}>

            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={video}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
              <Image src="/images/car.jpg" />
              <h5>  Mini Hummer</h5>
              <b> ₹  549</b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={main}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
              <Image src="/images/woden.jpg" />
              <h5> wooden Christmas Toys</h5>
              <b> ₹ 99    ₹1̶9̶9̶ </b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={car}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
              <Image src="/images/redcar.jpg" />
              <h5> Mini BMW Sedan</h5>
              <b> ₹  599</b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={toy}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
              <Image src="/images/Rrabbit.jpg" />
              <h5>Little Rabbit</h5>
              <b> ₹  599</b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={kid}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
              <Image src="/images/doll.jpg" />
              <h5>Doll House</h5>
              <b> ₹  899</b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={rabit}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
                <Image src="/images/bunny.jpg" />
              <h5>Cute Bunny</h5>
              <b> ₹  699</b>
            </div>
            <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={girl}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
                <Image src="/images/teddy.jpg" />
              <h5>Brown Teddy</h5>
              <b> ₹  999</b>
            </div>
            {/* <div>
              <Image src="/images/view.jpeg" /><span>100</span>
              <video
                className="slider-video"
                src={video}
                loop
                autoPlay
                muted
                loading="lazy"
                style={{ width: "20rem" }}></video>
            </div> */}
          </Slider>
        </Container>
      </div>
    );
  }
}