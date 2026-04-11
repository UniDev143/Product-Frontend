import React from 'react'
import { Link } from 'react-router-dom'

const RequestInfo = ({ product }) => {
  return (
    <div className="rounded-2xl bg-[#0f172a] p-5 text-white shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Need More Details?</p>
      <h2 className="mt-2 text-xl font-black sm:text-2xl">Request Info</h2>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        Contact our team for pricing, availability, and recommendations for {product.name}.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/#contact"
          className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Contact Us
        </a>
        <Link
          to="/product-list"
          className="inline-flex items-center rounded-lg border border-white/50 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
        >
          View More Products
        </Link>
      </div>
    </div>
  )
}

export default RequestInfo
