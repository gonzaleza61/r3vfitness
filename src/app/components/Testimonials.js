import Image from "next/image"
import { anton } from "../fonts"

export default function Testimonials() {
  return (
    <>
      <div className="bg-white py-16">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2
            className={`${anton.className} mb-12 text-center text-2xl font-bold text-gray-900 md:text-4xl`}
          >
            WHAT THEY SAY
          </h2>
          <div
            className={`${anton.className} grid gap-8 md:grid-rows-2 lg:grid-cols-2`}
          >
            <div className="row-span-2 rounded-xl border border-gray-100 bg-yellow p-6 text-center sm:p-8">
              <div className="flex h-full flex-col justify-center space-y-4">
                <Image
                  className="mx-auto h-20 w-20 rounded-full"
                  src="/aaron.webp"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="text-black md:text-xl">
                  {" "}
                  <span className="font-serif"></span> {'"'}Isaias is the real
                  deal. His dedication and expertise have been life-changing.
                  Thanks to his guidance, I{"'"}ve achieved fitness goals I
                  never thought were possible.{'"'}{" "}
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none text-black">
                    Aaron G.
                  </h6>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
              <Image
                className="mx-auto h-20 w-20 rounded-full"
                src="/sarah.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p className="text-black ">
                  {" "}
                  <span className="font-serif"></span> Training with Isaias has
                  been incredible. His customized workouts and constant
                  motivation are the reasons I{"'"}ve made significant progress
                  in my fitness journey. I can{"'"}t recommend him enough!
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none text-black">
                    Sarah M.
                  </h6>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
              <Image
                className="mx-auto h-20 w-20 rounded-full"
                src="/michael.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p className="text-black ">
                  {" "}
                  <span className="font-serif"></span> Isaias is more than a
                  personal trainer; he{"'"}s a life coach. His passion for
                  fitness and unwavering support have turned my life around. I
                  {"'"}m living healthier and happier, all thanks to his
                  guidance.
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none text-black">
                    Michael H.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
