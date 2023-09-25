import { anton } from "../fonts"
import Image from "next/image"

export default function HeroSection() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-center py-16 md:px-4">
        <h3 className={`${anton.className} my-auto block`}>Welcome to</h3>
        <h1 className={anton.className}>r3vFitness</h1>
        <Image src="/r3vfit.jpg" alt="r3vfitlogo" width={600} height={600} />
      </div>
    </>
  )
}
