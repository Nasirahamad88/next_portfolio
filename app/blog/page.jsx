import React from 'react'
import Link
 from 'next/link'
 import Image from 'next/image'

export default function Blog() {
  return (
    <div>
        
<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img
              src=""
              alt="image"
              className="w-full"
              width={160} 
            height={160}
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Dec 22, 2023
            </span>
            <h3>
              <Link
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                Meet AutoManage, the best AI management tools
              </Link>
            </h3>
            <p className="text-body-color text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src=""
              alt="image"
              className="w-full"
              width={160} 
            height={160}
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Mar 15, 2023
            </span>
            <h3>
              <Link
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                How to earn more money as a wellness coach
              </Link>
            </h3>
            <p className="text-body-color text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <Image
              src=""
              alt="image"
              className="w-full"
              width={160} 
            height={160}
            />
          </div>
          <div>
            <span
              className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
            >
              Jan 05, 2023
            </span>
            <h3>
              <Link
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
              >
                The no-fuss guide to upselling and cross selling
              </Link>
            </h3>
            <p className="text-body-color text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
