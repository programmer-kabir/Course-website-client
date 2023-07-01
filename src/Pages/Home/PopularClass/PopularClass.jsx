import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { HiOutlineCurrencyDollar,HiOutlineStar, HiStar } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import Container from "../../../Component/Container/Container";
import useLength from "../../../Component/Hooks/useCourseLength";
import Ratting from "react-rating";


const PopularClass = () => {
  const [coursesToShow,loading] = useLength()
  // console.log(coursesToShow);
  return (
    <Container>
      <div>
        <div className="mt-16 font-bold  text-3xl text-center">
          <h2>Popular Course</h2>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            coursesToShow.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="text-left mt-10 mb-16">
                  <img
                    className="rounded-md lg:h-52 w-full"
                    src={item.image}
                    alt=""
                  />
                  <h2 className="text-xl mt-5 ">{item.name}</h2>
                  <div className="flex text-base justify-between px-2 pt-2">
                    <p className="flex items-center">
                      {" "}
                      <HiOutlineCurrencyDollar /> {item.price}
                    </p>
                    <p>
                      <Ratting
                      readonly
                        placeholderRating={item.ratting}
                        emptySymbol={
                          <HiOutlineStar className="text-yellow-500"/>
                        }
                        placeholderSymbol={
                        <HiStar className="text-yellow-500"/>
                        }
                        fullSymbol={
                          <HiStar className="text-yellow-500"/>
                        }
                      />
                      {item.ratting}
                    </p>
                  </div>
                  <div className="flex text-base items-center gap-1 pt-2 px-2">
                    <FaRegEdit />
                    <p>{item.instructorName}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </Container>
  );
};

export default PopularClass;
