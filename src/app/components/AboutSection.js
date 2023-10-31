"use client"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <>
      <div id="about" className=" bg-white py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div
            ref={ref}
            className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12"
          >
            <div className="md:5/12 lg:w-5/12">
              <Image
                src="/isaias.jpeg"
                alt="image"
                loading="lazy"
                width="500"
                height="500"
                className="rounded-xl"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
                  About Isaias
                </h2>
              </motion.div>

              <p className="mt-6 text-gray-600">
                Isaias{"'"} role is to motivate, facilitate and make training a
                fun and rewarding experience for his clients. He has a passion
                of helping others achieve their personal health and fitness
                goals by hosting group training through his 4-Week Challenges
                and Online Programs.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                ​As a fitness coach, Isaias wants to share his enthusiasm,
                encourage a healthy lifestyle, and help many individuals realize
                what their body is capable of. Most importantly, show them that
                with determination, consistency, and support, the goal WILL be
                achieved!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
