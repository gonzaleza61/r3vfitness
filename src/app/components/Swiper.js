"use client"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

export default function ImageSwiper() {
  return (
    <>
      <section className="px-2 py-12">
        <div className="container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="h-96 w-full rounded-lg"
          >
            <div className="flex">
              <SwiperSlide className="bg-white">Slide 1</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 2</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 3</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 4</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 5</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 6</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 7</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 8</SwiperSlide>
              <SwiperSlide className="bg-white">Slide 9</SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  )
}
