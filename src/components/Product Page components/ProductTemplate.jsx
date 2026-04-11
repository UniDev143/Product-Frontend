import React from 'react'
import Gallery from './Gallery'
import Feature from './Feature'

const ProductTemplate = ({ product, galleryImages, activeImage, onSelectImage, onRequestInfo }) => {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-3 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <Gallery
            images={galleryImages}
            activeImage={activeImage}
            onSelectImage={onSelectImage}
            productName={product.name}
          />

          <Feature product={product} onRequestInfo={onRequestInfo} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProductTemplate
