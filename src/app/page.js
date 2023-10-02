import Image from "next/image"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"

export default function Home() {
  return (
    <>
      <div className=" h-px bg-zinc-800"></div>
      <HeroSection />
      <AboutSection />
    </>
  )
}
