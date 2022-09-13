import React, { Component } from "react";
import Slider from "react-slick";

export default class AppendDots extends Component {
    
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
         
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         width: "30px",
        //         color: "blue",
        //         border: "1px blue solid"
        //       }}
        //     >
        //       {i + 1}
        //     </div>
        //   )
    };
    return (
      <div className="text-center">
        <h2 >Append Dots</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
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
        </Slider>
      </div>
    );
  }
}