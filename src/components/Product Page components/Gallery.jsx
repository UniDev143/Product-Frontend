import React from 'react'

const Gallery = ({ images, activeImage, onSelectImage, productName }) => {
  const hasImages = images.length > 0

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
      {hasImages ? (
        <img
          src={activeImage || images[0]}
          alt={productName}
          className="h-80 w-full rounded-xl object-contain sm:h-105"
        />
      ) : (
        <div className="grid h-80 place-items-center rounded-xl bg-slate-50 text-sm font-semibold text-slate-500 sm:h-105">
          No image available
        </div>
      )}

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2.5">
          {images.map((image, index) => {
            const isActive = activeImage === image

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => onSelectImage(image)}
                className={`overflow-hidden rounded-lg border-2 transition ${isActive ? 'border-[#149fd8]' : 'border-transparent hover:border-slate-300'}`}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="h-16 w-20 object-cover sm:h-18 sm:w-24"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Gallery
