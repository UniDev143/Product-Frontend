import React from 'react'
import bannerImage from '../../assets/LandingPage/Banner.png'
import Featured from '../../assets/LandingPage/Featured.png'

const Banner = () => {
  return (
    <>
    <img
      src={bannerImage}
      alt="Banner"
      className="block h-auto w-full rounded-none object-cover"
    />
    <img
    src = {Featured}
    alt = "Featured"
    className = "block h-auto w-full rounded-none object-cover"
    />
    </>
    
  
  )
}

export default Banner
