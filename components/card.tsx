"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Card = ({ p1, p2, p3, p4 }) => {
  return (
    <div className="md:block hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section className="flex justify-center gap-[50px] flex-wrap">
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] h-[220px] bg-gray-900 pt-[15px] pl-[10px]">
              <p className="w-[130px] h-[30px] rounded-[6px] bg-black text-[15px] text-center content-center mb-[20px]">
                {p1}
              </p>
              <h1 className="text-2xl mb-[10px]">{p2}</h1>
              <p className="text-[15px] mb-[15px]">{p3}</p>
              <button className="text-yellow-400">{p4}</button>
            </div>
          </SwiperSlide>
        </section>
      </Swiper>
    </div>
  );
};

export default Card;
