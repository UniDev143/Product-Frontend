import React from 'react'
import tariqLogo from '../../assets/LandingPage/image 40.png'
import naeemLogo from '../../assets/LandingPage/image 40 (1).png'
import haiderLogo from '../../assets/LandingPage/image 40 (2).png'

const feedbacks = [
  {
    id: 1,
    name: 'Tariq Mehmood',
    location: 'Aga Khan Hospital',
    quote:
      'Fast, expert repairs and high-quality parts! The team at moralclean.com keeps our cleaning equipment running at peak efficiency in a demanding environment. An invaluable partner.',
    logo: tariqLogo,
    logoClass: 'rounded-full bg-white object-contain p-1',
  },
  {
    id: 2,
    name: 'Naeem Khan',
    location: 'ATCO Laboratories Limited',
    quote:
      'Top-tier maintenance and reliable parts! moralclean.com keeps our laboratory cleaning machines running flawlessly with zero downtime. A highly dependable partner.',
    logo: naeemLogo,
    logoClass: 'rounded-full bg-white object-contain p-1',
  },
  {
    id: 3,
    name: 'Haider Abbas',
    location: 'Getz Pharma',
    quote:
      'Fast service and durable replacement parts keep our facility’s cleaning equipment operating flawlessly. An incredibly efficient and professional team.',
    logo: haiderLogo,
    logoClass: 'rounded-full bg-white object-contain p-1',
  },
]

const FeedbackCard = ({ name, location, quote, mark, markClass, logo, logoClass }) => {
  return (
    <article className="flex h-full flex-col justify-between bg-white px-6 py-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:px-7 sm:py-7">
      <div>
        <div className="text-5xl font-black leading-none text-black sm:text-[56px]">”</div>
        <p className="mt-4 text-[16px] leading-normal tracking-[-0.01em] text-slate-700 sm:text-[17px]">
          {quote}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-4 sm:mt-12">
        {logo ? (
          <img src={logo} alt={name} className={`h-14 w-14 sm:h-16 sm:w-16 ${logoClass}`} />
        ) : (
          <div className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-black tracking-wide sm:h-16 sm:w-16 ${markClass}`}>
            {mark}
          </div>
        )}
        <div>
          <h3 className="text-[18px] font-extrabold leading-tight text-[#1196e5] sm:text-[20px]">
            {name}
          </h3>
          <p className="text-[14px] leading-tight text-slate-700 sm:text-[15px]">{location}</p>
        </div>
      </div>
    </article>
  )
}

const Feedbacks = () => {
  return (
    <section className="w-full bg-[#73c0e9] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-black sm:text-[15px]">
          <svg viewBox="0 0 48 24" className="h-4 w-8" aria-hidden="true">
            <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Testimonial</span>
        </div>
        <h2 className="mt-2 text-[30px] font-black uppercase leading-none text-black sm:text-[42px] lg:text-[50px]">
          What Our Clients Says
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feedbacks
