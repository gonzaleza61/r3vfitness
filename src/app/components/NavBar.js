"use client"
import { anton } from "../fonts"
import "font-awesome/css/font-awesome.min.css"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { UserButton } from "@clerk/nextjs"

export default function NavBar() {
  const [faIcon, setFaIcon] = useState(true)

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Programs", href: "/" },
    { title: "Testimonials", href: "/" },
    { title: "Contact", href: "/" },
  ]

  const faIconToggle = () => {
    setFaIcon(!faIcon)
  }

  return (
    <>
      <nav
        className={`${
          faIcon ? "bg-black " : "bg-black "
        }mx-auto my-0 max-w-screen-xl py-8 md:px-4`}
      >
        {/**
         * Mobile Nav
         */}
        <div className="absolute right-8 top-4 md:hidden">
          <button
            onClick={() => {
              faIconToggle()
            }}
            aria-label="navigation"
            type="button"
            id="bars"
            className={`fa fa-sharp ${
              faIcon ? "fa-bars" : "fa-times"
            } fa-regular text-3xl`}
          ></button>
        </div>

        <div className="w-full bg-black md:hidden">
          <div
            className={`${
              faIcon ? "hidden" : "flex"
            }  flex-col justify-between text-center`}
          >
            <Link className="py-2" href="#">
              HOME
            </Link>
            <div className="w-full border border-yellow"></div>
            <Link className="py-2" href="#about">
              ABOUT
            </Link>
            <div className="w-full border border-yellow"></div>
            <Link className="py-2" href="#programs">
              PROGRAMS
            </Link>
            <div className="w-full border border-yellow"></div>
            <Link className="py-2" href="#testimonials">
              TESTIMONIALS
            </Link>
            <div className="w-full border border-yellow"></div>
            <Link className="py-2" href="#contact">
              CONTACT
            </Link>
            <div className="w-full border border-yellow"></div>
            <UserButton />
          </div>
        </div>

        {/**
         * Desktop Nav
         */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ul className="m-0 hidden list-none flex-row flex-wrap items-center justify-center gap-8 p-0 md:flex">
            <li className="hover:transition-color mr-auto basis-auto text-left text-white  hover:text-yellow hover:duration-500">
              <h1>
                <a href="/">
                  <div className="relative">
                    <Image
                      src="/r3vlogo.svg"
                      alt="r3vfitlogo"
                      width={50}
                      height={50}
                      className="transition-all duration-300 ease-in-out"
                    />
                    <div className="hover: absolute inset-0 bg-yellow opacity-0 mix-blend-multiply transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
                  </div>
                </a>
              </h1>
            </li>
            <li className="hover:transition-color text-white hover:text-yellow  hover:duration-500">
              <Link href="#about">ABOUT</Link>
            </li>
            <li className="hover:transition-color text-white hover:text-yellow  hover:duration-500">
              <Link href="#programs">PROGRAMS</Link>
            </li>
            <li className="hover:transition-color text-white hover:text-yellow  hover:duration-500">
              <Link href="#testimonials">TESTIMONIALS</Link>
            </li>
            <li
              className="border-yellow-50 hover:transition-color rounded-full border px-4 py-1 text-lg 
          text-white hover:border-black  hover:bg-yellow hover:text-black hover:duration-500"
            >
              <Link className={anton.className} href="#contact">
                CONTACT
              </Link>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  )
}
