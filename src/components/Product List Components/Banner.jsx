import React from 'react'

const Banner = ({ image, alt }) => {
  return (
    <section className="w-full overflow-hidden">
      <img src={image} alt={alt} className="h-48 w-full object-cover sm:h-64 lg:h-72" />
    </section>
  )
}

export default Banner
