"use client"
import Image from 'next/image';
import img11 from "../public/image 19.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from 'next/link';
const SwiperCom = ({p1,p2,p3}:any) => {
    
  return (
    <div className='md:block hidden'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section className="flex justify-center gap-[70px] flex-wrap">
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-[350px] bg-gray-900 rounded-[18px] h-[380px]">
              <Image src={img11} alt="" />
              <section className="pl-[20px] mt-[20px]">
                <p className="text-2xl mb-[10px]">{p1}</p>
                <p className="mb-[10px]">{p2}</p>
                <Link href={"/info"}>
                <button className="cursor-pointer text-yellow-400">{p3}</button>
                </Link>
              </section>
            </section>
          </SwiperSlide>
        </section>
      </Swiper>
    </div>
  );
}

export default SwiperCom
