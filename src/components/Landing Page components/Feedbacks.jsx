import React from 'react'

const feedbacks = [
  {
    id: 1,
    name: 'Bradford B. Pounds',
    location: 'Santa Cruz, CA',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    initials: 'BB',
  },
  {
    id: 2,
    name: 'Catherine Lopez',
    location: 'Santa Cruz, CA',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    initials: 'CL',
  },
  {
    id: 3,
    name: 'Michael M. Brown',
    location: 'Santa Cruz, CA',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    initials: 'MB',
  },
]

const FeedbackCard = ({ name, location, quote, initials }) => {
  return (
    <article className="flex h-full flex-col justify-between bg-white px-6 py-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
      <div>
        <div className="text-5xl font-black leading-none text-black">“</div>
        <p className="mt-4 text-base leading-7 text-slate-700">{quote}</p>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d9eefe] text-lg font-bold text-[#0996d3]">
          {initials}
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#0996d3]">{name}</h3>
          <p className="text-sm text-slate-700">{location}</p>
        </div>
      </div>
    </article>
  )
}

const Feedbacks = () => {
  return (
    <section className="w-full bg-transparent px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm uppercase tracking-[0.22em] text-black">Testimonial</p>
        <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-black sm:text-5xl">
          What Our Clients Says
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feedbacks
