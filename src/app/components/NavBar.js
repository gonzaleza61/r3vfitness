import { anton, inter } from "../fonts"
import "font-awesome/css/font-awesome.min.css"

export default function NavBar() {
  return (
    <>
      <nav className="mx-auto my-0 max-w-screen-xl  px-4 py-16">
        <div className="absolute right-8 top-4 md:hidden">
          <button
            aria-label="navigation"
            type="button"
            id="button"
            className="fa fa-sharp fa-bars fa-regular text-3xl"
          ></button>
        </div>

        {/**
         * Desktop Navigation
         */}
        <ul className="m-0 hidden list-none flex-row flex-wrap items-center justify-center gap-8 p-0 md:flex">
          <li className="hover:transition-color mr-auto basis-auto text-left text-white  hover:text-yellow hover:duration-500">
            <h1>
              <a href="/">HOME</a>
            </h1>
          </li>
          <li className="hover:transition-color text-white hover:text-yellow  hover:duration-500">
            <a href="#">ABOUT</a>
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
