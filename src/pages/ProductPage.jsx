import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDataContext } from '../context/DataContext'

const ProductPage = () => {
  const { productId } = useParams()
  const { products, isProductsLoading } = useDataContext()
  const [activeImage, setActiveImage] = useState('')

  const selectedProduct = useMemo(() => {
    return products.find((product) => String(product._id || product.id) === productId)
  }, [products, productId])

  const galleryImages = useMemo(() => {
    if (!selectedProduct) {
      return []
    }

    const images = [selectedProduct.mainImage || selectedProduct.image, ...(selectedProduct.otherImages || [])]
    return images.filter(Boolean)
  }, [selectedProduct])

  useEffect(() => {
    if (!galleryImages.length) {
      setActiveImage('')
      return
    }

    setActiveImage(galleryImages[0])
  }, [galleryImages])

  if (isProductsLoading) {
    return (
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900">Loading Product...</h1>
      </section>
    )
  }

  if (!selectedProduct) {
    return (
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900">Product Not Found</h1>
        <p className="mt-3 text-slate-600">The requested product does not exist.</p>
        <Link to="/product-list" className="mt-6 inline-block rounded bg-[#129ed6] px-5 py-2.5 font-semibold text-white">
          Back To Product List
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-3 py-10 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-[#efefef] p-3 sm:p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded bg-[#e7e7e7] p-4">
            {activeImage ? (
              <img
                src={activeImage}
                alt={selectedProduct.name}
                className="h-80 w-full object-contain sm:h-105"
              />
            ) : (
              <div className="grid h-80 place-items-center text-sm font-semibold text-slate-500 sm:h-105">
                No image available
              </div>
            )}
          </div>

          <div className="rounded bg-[#f7f7f7] p-4 sm:p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">{selectedProduct.category || selectedProduct.type}</p>
            <h1 className="mt-1 text-2xl font-black leading-tight text-[#0e1a22] sm:text-4xl">{selectedProduct.name}</h1>

            <p className="mt-3 text-[13px] leading-6 text-slate-700 sm:text-sm">
              {selectedProduct.description}
            </p>

            <div className="mt-4 space-y-1.5 text-[13px] text-slate-700 sm:text-sm">
              <p><span className="font-semibold text-[#0e1a22]">Company:</span> {selectedProduct.companyName || 'N/A'}</p>
              <p><span className="font-semibold text-[#0e1a22]">Manufactured In:</span> {selectedProduct.manufacturedIn || 'N/A'}</p>
              <p><span className="font-semibold text-[#0e1a22]">Category:</span> {selectedProduct.category || 'N/A'}</p>
            </div>

            <Link to="/product-list" className="mt-4 inline-block text-xs font-semibold text-[#129ed6] hover:underline">
              Back to Product List
            </Link>
          </div>
        </div>

        {galleryImages.length > 1 && (
          <div className="mt-4 rounded bg-[#f7f7f7] p-3">
            <div className="flex flex-wrap gap-2.5">
              {galleryImages.map((image, index) => {
                const isActive = activeImage === image

                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`overflow-hidden rounded border-2 ${isActive ? 'border-[#149fd8]' : 'border-transparent hover:border-slate-300'}`}
                    aria-label={`Show image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                      className="h-16 w-20 object-cover sm:h-18 sm:w-24"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {galleryImages.length <= 1 && selectedProduct.otherImages?.length > 0 && (
          <p className="mt-4 text-xs text-slate-500">Additional images are unavailable for preview.</p>
        )}
      </div>
    </section>
  )
}

export default ProductPage
