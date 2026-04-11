import React from 'react'

const Feature = ({ product, onRequestInfo }) => {

  const descriptionPoints = String(product.description || '')
    .replace(/\r\n/g, '\n')
    .split(/\n|•|▪|\uFFFD|;/)
    .map((point) => point.trim())
    .filter(Boolean)

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:min-h-full">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
        {product.category || product.type}
      </p>
      <h1 className="mt-2 text-2xl font-black leading-tight text-[#0e1a22] sm:text-4xl">
        {product.name}
      </h1>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-[14px] leading-7 text-slate-700 sm:text-base">
        {descriptionPoints.length > 0 ? (
          descriptionPoints.map((point, index) => (
            <li key={`${point}-${index}`}>{point}</li>
          ))
        ) : (
          <li>Product description is not available.</li>
        )}
      </ul>

      <button
        type="button"
        onClick={onRequestInfo}
        className="mt-8 inline-flex items-center rounded-lg bg-[#129ed6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f88bb]"
      >
        Request Info
      </button>
    </div>
  )
}

export default Feature
