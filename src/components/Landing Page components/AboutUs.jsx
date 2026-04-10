import React from 'react'
import aboutImage from '../../assets/LandingPage/Picture.png'

const AboutUs = () => {
  return (
    <section className="w-full bg-transparent px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-xl bg-black py-4 text-center shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
          <h2 className="text-3xl font-black text-white sm:text-5xl">About Us</h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <img
              src={aboutImage}
              alt="About us"
              className="h-full w-full object-contain p-4 sm:p-6"
            />
          </div>

          <div className="rounded-xl bg-white px-6 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10">
            <h3 className="text-2xl font-black leading-tight text-black sm:text-4xl">
              We Have 12 Years Of Experience In This Industry
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Will reenergize your home and enhance your life. From every day this man housekeeping to.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 sm:text-base">
              <li>We provide janitorial and specialized services.</li>
              <li>Constantly evolving and your brand must evolve.</li>
              <li>Tempor incididunt ut labore dolore magna aliqua.</li>
              <li>We provide all kind of commercial cleaning equipment.</li>
              <li>All cleaning chemicals and domestic equipment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
