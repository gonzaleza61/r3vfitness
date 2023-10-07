"use client"
import React, { useRef, useState } from "react"
import { anton } from "../fonts"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

import Image from "next/image"

export default function ImageSwiper() {
  return (
    <>
      <section className="px-12 py-12">
        <h1
          className={`${anton.className} py-6 text-3xl underline decoration-yellow sm:text-4xl xl:text-5xl/none`}
        >
          OUR PROGRAMS
        </h1>
        <div className="justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-96 w-full rounded-lg"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <div className="flex">
              <SwiperSlide className="bg-slate-700">
                <Image
                  src="/strengthtraining.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
              </SwiperSlide>
              <SwiperSlide className="bg-slate-700">
                <Image
                  src="/training2.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="bg-slate-700">
                <Image
                  src="/mealplan.jpg"
                  alt="meal plan"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
              </SwiperSlide>
              <SwiperSlide className="bg-slate-700">
                <Image
                  src="/training1.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="bg-slate-700">
                <Image
                  src="/training3.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
                Slide 5
              </SwiperSlide>
              <SwiperSlide className="bg-slate-700">
                {" "}
                <Image
                  src="/training4.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
                Slide 6
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  )
}
