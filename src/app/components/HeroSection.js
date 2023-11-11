"use client"

import { anton } from "../fonts"

import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

import { motion } from "framer-motion"

import { SignIn } from "@clerk/nextjs"

export default function Component() {
  library.add(faChevronRight)

  return (
    <section className="flex h-screen w-full items-center bg-black py-2 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <h1
                  className={`${anton.className} bg-white  bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl/none`}
                >
                  START YOUR REVOLUTION IN FITNESS
                </h1>
                <p className=" mx-auto max-w-[600px] pb-5 text-yellow  md:text-xl">
                  Become a Part of My Dynamic Fitness Team and Begin Your Health
                  Journey.
                </p>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  className={`${anton.className} hover:transition-color mr-2  rounded-xl border border-white bg-yellow px-5 py-2 text-center text-lg
          text-black hover:border-white  hover:bg-black hover:text-white hover:duration-500`}
                  href="/dashboard"
                >
                  JOIN NOW
                  <FontAwesomeIcon
                    className="items-center text-xl"
                    icon="chevron-right"
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  className={`${anton.className} border-yellow-50 hover:transition-color rounded-xl   border px-5 py-2 text-lg 
          text-white hover:border-black  hover:bg-yellow hover:text-black hover:duration-500`}
                  href="/dashboard"
                >
                  LOGIN
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
