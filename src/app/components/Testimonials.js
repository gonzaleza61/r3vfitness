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
                  src="/vercel.svg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="text-gray-600 md:text-xl">
                  {" "}
                  <span className="font-serif"></span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
              <Image
                className="mx-auto h-20 w-20 rounded-full"
                src="/vercel.svg"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif"></span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 sm:flex sm:space-x-8 sm:p-8">
              <Image
                className="mx-auto h-20 w-20 rounded-full"
                src="/vercel.svg"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  {" "}
                  <span className="font-serif"></span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif"></span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
