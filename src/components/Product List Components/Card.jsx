import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
  const productId = product._id || product.id
  const imageSrc = product.mainImage || product.image
  const shortDescription = String(product.description || '')
    .trim()
    .split(/\s+/)
    .slice(0, 12)
    .join(' ')

  return (
    <Link to={`/products/${productId}`} className="block">
      <article className="rounded-xl bg-[#ececec] p-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5">
      <div className="overflow-hidden rounded-lg bg-[#d9d9d9]">
        <img
          src={imageSrc}
          alt={product.name}
          className="block h-56 w-full object-cover"
        />
      </div>

      <div className="px-1.5 pb-1 pt-2.5">
        <h3 className="text-[20px] font-bold leading-tight text-[#1a1a1a]">{product.name}</h3>
        <p className="mt-1.5 text-[13px] leading-normal text-[#4f4f4f]">{shortDescription}</p>
        <p className="mt-1.5 text-[12px] font-semibold text-[#5c5c5c]">{product.companyName || 'Moral Clean'}</p>

        <div className="mt-2.5 flex items-center justify-end gap-2">

          <button
            type="button"
            aria-label="View details"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-[#149fd8] text-[#0a2230] transition-transform duration-200 hover:scale-105"
            onClick={(event) => event.preventDefault()}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8H18a1 1 0 0 0 1-.8L21 7H7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="19" r="1.4" fill="currentColor" />
              <circle cx="17" cy="19" r="1.4" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      </article>
    </Link>
  )
}

export default Card
