import Carousel from "react-bootstrap/Carousel";
import car from '../src/videos/car.mp4'
import girl from '../src/videos/girl.mp4'
import kid from '../src/videos/kid.mp4'
import main from '../src/videos/main.mp4'
import rabit from '../src/videos/rabit.mp4'
import toy from '../src/videos/toy.mp4'
import video from '../src/videos/video.mp4'

const CaroselVideo = () => {
  const sliderVideos = document.querySelectorAll(".slider-video");
  const handler = () => {
    sliderVideos.forEach((video,key) => {
    video.pause();
    video.currentTime = 0;
    video.load();
});
  };
  return (
    <div className="Hero">
      <div>
        <Carousel
          controls={false}
          fade={true}
          interval={5500}
          pause={false}
          className="hero-slider"
          onSlid={handler}
        >
          <Carousel.Item>
             <video
            className="slider-video"
            src={car}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={girl}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={main}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={kid}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={rabit}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={toy}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default CaroselVideo;