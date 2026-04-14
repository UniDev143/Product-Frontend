import React from 'react'
import aboutImage from '../../assets/LandingPage/Picture.png'

const AboutUs = () => {
  return (
    <section className="w-full bg-[#73c0e9] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:flex-row lg:items-stretch lg:gap-8">
        <div className="flex w-full items-end justify-center lg:w-[44%] lg:justify-end lg:mb-[-2.5rem]">
          <img
            src={aboutImage}
            alt="About us"
            className="block h-auto w-full max-w-110 object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.12)] lg:max-w-none"
          />
        </div>

        <div className="flex w-full flex-col justify-center gap-4 lg:w-[56%] lg:max-w-140">
          <div className="rounded-md bg-white px-6 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-8 sm:py-5">
            <h2 className="text-[36px] font-black leading-none text-black sm:text-[40px]">
              About Us
            </h2>
          </div>

          <div className="rounded-md bg-white px-6 py-5 shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:px-8 sm:py-6">
            <h3 className="text-[36px] font-black leading-tight text-black sm:text-[42px]">
              Meet CEO.
            </h3>

            <p className="mt-3 text-[18px] leading-normal text-slate-600 sm:text-[19px]">
              At Moral Clean, led by CEO Muhammad Moiz Khan, we provide end-to-end solutions for all your commercial cleaning needs. Backed by industry expertise established in 2007, we offer:
            </p>

            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[17px] leading-normal text-slate-600 sm:text-[18px]">
              <li>Premium Equipment Supply: A comprehensive range of janitorial and industrial cleaning machines.</li>
              <li>Authorized Biemmedue Distributor: Proud partners bringing top-tier Italian engineering to Pakistan.</li>
              <li>Expert Repair Services: Fast, reliable maintenance to keep your machines running flawlessly.</li>
              <li>Nationwide Reach: A growing network of highly satisfied clients across Pakistan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
