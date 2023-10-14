import Image from "next/image"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"
import ImageSwiper from "./components/Swiper"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <div className=" h-px bg-zinc-800"></div>
      <HeroSection />
      <AboutSection />
      <ImageSwiper />
      <Testimonials />
    </>
  )
}
