import React from 'react'
import { Link } from 'react-router-dom'
import motorRepairingImage from '../../assets/LandingPage/MotorRepairing.png'
import partsReplacementImage from '../../assets/LandingPage/PartsReplacement.png'
import brushRefilingImage from '../../assets/LandingPage/BrushRefiling.png'

const services = [
  {
    id: 1,
    image: motorRepairingImage,
    title: 'Motor Repairing',
  },
  {
    id: 2,
    image: partsReplacementImage,
    title: 'Parts Replacement',
  },
  {
    id: 3,
    image: brushRefilingImage,
    title: 'Brush Refiling',
  },
]

const ServiceCard = ({ image, title }) => {
  return (
    <Link to="/services" className="block">
      <article className="overflow-hidden rounded-none bg-white transition-transform duration-300 ease-out hover:scale-[1.05]">
        <img src={image} alt={title} className="h-56 w-full rounded-none object-cover" />
        <h3 className="px-3 py-4 text-center text-lg font-bold uppercase text-black">{title}</h3>
      </article>
    </Link>
  )
}

const Service = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-25 sm:px-6 lg:px-8">
      <div>
        <div className="inline-flex items-center gap-3 text-lg font-medium uppercase tracking-wide text-slate-900">
          <svg viewBox="0 0 48 24" className="h-5 w-8" aria-hidden="true">
            <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>What We Offer</span>
        </div>
        <h2 className="mt-3 text-5xl font-black uppercase leading-none text-black sm:text-6xl">
          Our Services
        </h2>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Service
