import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

export default function Banner() {
  return (
    <div>
      <Carousel autoPlay className=" opacity-60">
        <div>
          <img src={img1} alt="images" />
        </div>
        <div>
          <img src={img2} alt="images" />
        </div>
        <div>
          <img src={img3} alt="images" />
        </div>
        <div>
          <img src={img4} alt="images" />
        </div>
        <div>
          <img src={img5} alt="images" />
        </div>
        <div>
          <img src={img6} alt="images" />
        </div>
      </Carousel>
    </div>
  );
}
