import React from 'react'
import { Link } from 'react-router-dom'
import motorRepairingImage from '../../assets/LandingPage/Bucket.png'
import partsReplacementImage from '../../assets/LandingPage/Chemical.png'
import brushRefilingImage from '../../assets/LandingPage/Ride on.png'
import featuredImage from '../../assets/LandingPage/Single disk.png'
import vacuum from '../../assets/LandingPage/Vacuum.png'
import walk from '../../assets/LandingPage/Walk Behind.png'

const products = [
  {
    image: featuredImage,
    category: 'Single disk floor scrubbing machine',
    alt: 'Single disk floor scrubbing machine',
  },
  {
    image: motorRepairingImage,
    category: 'janitorial equipments',
    alt: 'Janitorial equipments',
  },
  {
    image: partsReplacementImage,
    category: 'floor cleaning chemicals and equipments',
    alt: 'Floor cleaning chemicals and equipments',
  },
  {
    image: brushRefilingImage,
    category: 'ride on scrubber dryer',
    alt: 'Ride on scrubber dryer',
  },
  {
    image: vacuum,
    category: 'industrial vacumm cleaner',
    alt: 'Industrial vacumm cleaner',
  },
  {
    image: walk,
    category: 'walk behind scubber dryer',
    alt: 'Walk behind scubber dryer',
  },
]

const Products = () => {
  return (
    <section className="w-full bg-[#ececec] py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-black text-black sm:text-6xl">OUR PRODUCTS</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {products.map((product, index) => (
            <Link
              key={index}
              to={`/product-list?category=${encodeURIComponent(product.category)}`}
              className="block h-80 overflow-hidden rounded-xl"
            >
              <img src={product.image} alt={product.alt} className="h-full w-full object-cover " />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
