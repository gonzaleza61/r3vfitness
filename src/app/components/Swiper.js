"use client"
import React, { useRef, useState, useEffect } from "react"
import { anton } from "../fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
//deploy test
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper/modules"

import Image from "next/image"
import { library } from "@fortawesome/fontawesome-svg-core"

//animation
import { motion, useInView, useAnimation } from "framer-motion"

export default function ImageSwiper() {
  library.add(faChevronRight)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <>
      <section
        ref={ref}
        id="programs"
        className="block justify-center px-4 py-28 md:px-8 lg:px-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
        >
          <h1
            className={`${anton.className} pb-4 text-3xl underline decoration-yellow sm:text-4xl xl:text-5xl/none`}
          >
            MY PROGRAMS
          </h1>
        </motion.div>
        <p className=" max-w-xs pb-8 text-sm text-gray-600">
          Rev up your fitness journey with personalized programs and data-driven
          training methods.
        </p>
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
        <div className="flex items-center justify-end pt-2">
          <h1 className={`${anton.className} pr-1 text-2xl text-white`}>
            SWIPE
          </h1>
          <FontAwesomeIcon
            className="text-2xl"
            icon="chevron-right"
            beat
            style={{ color: "#d7fb00" }}
          />
          <FontAwesomeIcon
            className="text-2xl"
            icon="chevron-right"
            beat
            style={{ color: "#d7fb00" }}
          />
        </div>
      </section>
    </>
  )
}
