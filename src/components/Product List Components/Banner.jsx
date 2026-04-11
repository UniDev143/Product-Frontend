import React from 'react'

const Banner = ({ image, alt }) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full aspect-16/5 sm:aspect-16/5 lg:aspect-16/5">
        <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </section>
  )
}

export default Banner
