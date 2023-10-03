import { anton } from "../fonts"
// import Image from "next/image"

// export default function HeroSection() {
//   return (
//     <>
//       <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-around py-16 md:flex-row md:px-4">
//         <div>
//           <h3 className={`${anton.className} my-auto block`}>Welcome to</h3>
//           <h1 className={anton.className}>r3vFitness</h1>
//         </div>
//         <Image src="/r3vlogo.svg" alt="r3vfitlogo" width={450} height={450} />
//       </div>
//     </>
//   )
// }

import Link from "next/link"

export default function Component() {
  return (
    <section className="flex h-screen w-full items-center bg-black py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className={`${anton.className} bg-white  bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl xl:text-6xl/none`}
              >
                START YOUR REVOLUTION IN FITNESS
              </h1>
              <p className="t mx-auto max-w-[600px] text-yellow  md:text-xl">
                Become a Part of Our Dynamic Fitness Community and Begin Your
                Health Journey.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <div
                  className="max-w-lg flex-1 border-gray-900 bg-gray-800 text-white"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="bg-white text-black" type="submit">
                  Join Now
                </button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <Link
                  className="text-white underline underline-offset-2"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
