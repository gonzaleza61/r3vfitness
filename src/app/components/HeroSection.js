import { anton } from "../fonts"
import Image from "next/image"

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-around py-16 md:flex-row md:px-4">
        <div>
          <h3 className={`${anton.className} my-auto block`}>Welcome to</h3>
          <h1 className={anton.className}>r3vFitness</h1>
        </div>
        <Image src="/r3vfit.jpg" alt="r3vfitlogo" width={450} height={450} />
      </div>
    </>
  )
}
