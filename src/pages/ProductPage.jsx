import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDataContext } from '../context/DataContext'
import ProductTemplate from '../components/Product Page components/ProductTemplate'
import RequestInfoModal from '../components/Product Page components/RequestInfoModal'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
})

const ProductPage = () => {
  const { productId } = useParams()
  const { products, isProductsLoading } = useDataContext()
  const [activeImage, setActiveImage] = useState('')
  const [isRequestInfoOpen, setIsRequestInfoOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const openRequestInfo = () => {
    setIsRequestInfoOpen(true)
  }

  const closeRequestInfo = () => {
    if (!isSubmitting) {
      setIsRequestInfoOpen(false)
    }
  }

  const handleRequestSubmit = async (formData) => {
    if (!formData.name || !formData.phone || !formData.email || !formData.issue) {
      toast.error('Please fill out all fields.')
      return
    }

    try {
      setIsSubmitting(true)

      await apiClient.post('/api/contact', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        issue: `Product: ${selectedProduct.name}\n\n${formData.issue}`,
      })

      setIsRequestInfoOpen(false)
      toast.success('Our team has got your question. We will contact you in a while.')
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong. Please try again.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <>
      <ProductTemplate
        product={selectedProduct}
        galleryImages={galleryImages}
        activeImage={activeImage}
        onSelectImage={setActiveImage}
        onRequestInfo={openRequestInfo}
      />

      <RequestInfoModal
        product={selectedProduct}
        isOpen={isRequestInfoOpen}
        onClose={closeRequestInfo}
        onSubmit={handleRequestSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  )
}

export default ProductPage
