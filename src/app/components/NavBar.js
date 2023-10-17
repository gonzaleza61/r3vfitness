"use client"
import { anton, inter } from "../fonts"
import "font-awesome/css/font-awesome.min.css"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const [faIcon, setFaIcon] = useState(true)

  const faIconToggle = () => {
    setFaIcon(!faIcon)
  }

  return (
    <>
      <nav
        className={`${
          faIcon ? "bg-black " : "bg-gray-500 "
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

        <div className="w-full bg-gray-500 md:hidden">
          <div
            className={`${
              faIcon ? "hidden" : "flex"
            }  flex-col justify-between text-center`}
          >
            <a className="py-2" href="#">
              HOME
            </a>
            <a className="py-2" href="#">
              ABOUT
            </a>
            <a className="py-2" href="#">
              PROGRAMS
            </a>
            <a className="py-2" href="#">
              TESTIMONIALS
            </a>
            <a className="py-2" href="#">
              CONTACT
            </a>
          </div>
        </div>

        {/**
         * Desktop Nav
         */}
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
            <a href="#">PROGRAMS</a>
          </li>
          <li className="hover:transition-color text-white hover:text-yellow  hover:duration-500">
            <a href="#">TESTIMONIALS</a>
          </li>
          <li
            className="border-yellow-50 hover:transition-color rounded-full border px-4 py-1 text-lg 
          text-white hover:border-black  hover:bg-yellow hover:text-black hover:duration-500"
          >
            <a className={anton.className} href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
