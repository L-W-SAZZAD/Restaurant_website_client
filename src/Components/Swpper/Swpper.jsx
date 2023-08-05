import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";

export default function Swpper() {
  return (
    <div className=" lg:w-[1320px] mx-auto lg:px-0 px-3 py-10">
      <>
        <SectionTitle
          title="---From 11:00am to 10:00pm---"
          subTitle="ORDER ONLINE"
        ></SectionTitle>
        <Swiper
          breakpoints={{
            140: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="slide_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="slide_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="slide_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="slide_4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="slide_5" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
