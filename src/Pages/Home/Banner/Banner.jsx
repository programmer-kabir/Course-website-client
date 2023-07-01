import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../../../public/Banner/Img1.jpeg";
import img2 from "../../../../public/Banner/Img2.jpeg";
import img3 from "../../../../public/Banner/Img3.jpeg";
import img4 from "../../../../public/Banner/Img4.jpeg";
import img5 from "../../../../public/Banner/Img5.jpeg";

const Banner = () => {
  return (
    <div className="mx-5">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={img1} />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
