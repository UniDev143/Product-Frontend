import React from 'react'
import Banner from '../components/Landing Page components/Banner'
import Service from '../components/Landing Page components/Service'
import Products from '../components/Landing Page components/Products'
import AboutUs from '../components/Landing Page components/AboutUs'
import ContactUs from '../components/Landing Page components/ContactUs'
import Feedbacks from '../components/Landing Page components/Feedbacks'

const LandingPage = () => {
  return (
    <div>
      <div id="top" className="scroll-mt-32 lg:scroll-mt-36">
        <Banner />
      </div>

      <section id="services" className="scroll-mt-26 lg:scroll-mt-26">
        <Service />
      </section>

      <section id="products" className="scroll-mt-26 lg:scroll-mt-26">
        <Products />
      </section>

      <section id="about" className="scroll-mt-20 lg:scroll-mt-20">
        <AboutUs />
      </section>

      <section id="contact" className="scroll-mt-25 lg:scroll-mt-25">
        <ContactUs />
      </section>

      <Feedbacks />
    </div>
  )
}

export default LandingPage
