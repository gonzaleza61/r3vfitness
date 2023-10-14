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
      <section className="block justify-center px-4 py-28 md:px-8 lg:px-12">
        <h1
          className={`${anton.className} pb-6 text-3xl underline decoration-yellow sm:text-4xl xl:text-5xl/none`}
        >
          MY PROGRAMS
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
            <SwiperSlide>
              <div className="flex">
                <div
                  className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
                >
                  <h1 className="text-center text-lg text-white">
                    CUSTOMIZED WORKOUTS
                  </h1>
                </div>
                <Image
                  src="/strengthtraining.jpg"
                  alt="strength training"
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                  loading="eager"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
              >
                <h1 className="text-center text-lg text-white">
                  ONE-ON-ONE TRAINING
                </h1>
              </div>
              <Image
                src="/training2.jpg"
                alt="strength training"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
              Slide 4
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
              >
                <h1 className="text-center text-lg text-white">
                  NUTRITIONAL GUIDANCE
                </h1>
              </div>
              <Image
                src="/mealplan.jpg"
                alt="meal plan"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
              >
                <h1 className="text-center text-lg text-white">
                  FUNCTIONAL FITNESS TRAINING
                </h1>
              </div>
              <Image
                src="/training1.jpg"
                alt="strength training"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
              Slide 3
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
              >
                <h1 className="text-center text-lg text-white">
                  STRENGTH TRAINING
                </h1>
              </div>
              <Image
                src="/training3.jpg"
                alt="strength training"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
              Slide 5
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`${anton.className} absolute bottom-0 w-full bg-black bg-opacity-50 p-6`}
              >
                <h1 className="text-center text-lg text-white">BOOT CAMPS</h1>
              </div>
              <Image
                src="/training4.jpg"
                alt="strength training"
                className="h-full w-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
              Slide 6
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
