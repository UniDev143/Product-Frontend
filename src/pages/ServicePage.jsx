import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import bannerImage from '../assets/ServicePage/HERO (4).png'
import firstServiceImage from '../assets/ServicePage/Frame 200.png'
import secondServiceImage from '../assets/ServicePage/Frame 201.png'
import thirdServiceImage from '../assets/ServicePage/Frame 202 (1).png'
import { servicesData } from '../data/servicesData'
import RequestInfoModal from '../components/Product Page components/RequestInfoModal'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
})

const ServicePage = () => {
  const location = useLocation()
  const [isRequestInfoOpen, setIsRequestInfoOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedServiceName, setSelectedServiceName] = useState('Service')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = location.hash.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  const firstServiceHighlights = [
    'Comprehensive Diagnostics: Fast, detailed inspections to resolve issues.',
    'All Machines Covered: Servicing everything from handheld to industrial.',
    'High-Quality Repairs: Premium parts for long-lasting results.',
    'Preventative Maintenance: Regular servicing to extend equipment life.',
    'Quick Turnaround: Efficient service to minimize downtime.',
  ]
  const secondServiceHighlights = [
    'Cost-Effective: A budget-friendly alternative to buying new.',
    'High-Quality Bristles: Durable materials tailored to your machine.',
    'Enhanced Performance: Restored brushes deliver optimal cleaning.',
    'Quick Turnaround: Get your equipment back in action fast.',
    'Eco-Friendly: Reduces waste by extending brush lifespan.',
  ]
  const thirdServiceHighlights = [
    'Cost-Effective: A budget-friendly alternative to buying new.',
    'High-Quality Bristles: Durable materials tailored to your machine.',
    'Enhanced Performance: Restored brushes deliver optimal cleaning.',
    'Quick Turnaround: Get your equipment back in action fast.',
    'Eco-Friendly: Reduces waste by extending brush lifespan.',
  ]

  const serviceSectionIds = ['motor-repairing', 'parts-replacement', 'brush-refiling']

  const openRequestInfo = (serviceName) => {
    setSelectedServiceName(serviceName)
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
        issue: `Service: ${selectedServiceName}\n\n${formData.issue}`,
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

  return (
    <div className="min-h-screen bg-[#72bfea]">
      <section className="px-4 pt-3 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-[#8cccf0] shadow-[0_16px_40px_rgba(15,64,93,0.18)]">
          <img src={bannerImage} alt="Services banner" className="block h-auto w-full object-cover" />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <div className="mx-auto w-full max-w-7xl space-y-6">
          {servicesData.map((service, index) => {
            const displayImage = index === 0 ? firstServiceImage : index === 1 ? secondServiceImage : thirdServiceImage
            const isMiddleCard = index === 1
            const revealClass = isMiddleCard ? 'service-reveal-left' : 'service-reveal-right'
            return (
              <article
                key={service.title}
                id={serviceSectionIds[index]}
                className={`scroll-mt-34 overflow-hidden rounded-none bg-white shadow-[0_10px_30px_rgba(15,64,93,0.16)] ${revealClass}`}
                style={{ animationDelay: `${index * 160}ms` }}
              >
                {isMiddleCard ? (
                  <div className="grid items-stretch gap-0 lg:grid-cols-[1.35fr_0.95fr]">
                    <div className="flex flex-col justify-center bg-white px-6 py-6 font-['Poppins',sans-serif] sm:px-8 lg:px-10 lg:py-7">
                      <p className="inline-flex items-center gap-3 text-base font-medium uppercase tracking-wide text-slate-900 sm:text-lg">
                        <svg viewBox="0 0 48 24" className="h-5 w-8" aria-hidden="true">
                          <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>WHY CHOSSE OUR BRUSH REFILING SERVICE?</span>
                      </p>
                      <h2 className="mt-2 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                        Brush Refiling
                      </h2>
                      <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-[16px] leading-6 text-slate-900 sm:text-[18px]">
                        {secondServiceHighlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => openRequestInfo(service.title)}
                          className="inline-flex items-center rounded-full bg-black px-5 py-3 text-[18px] font-semibold tracking-[-0.02em] text-white transition hover:bg-slate-800"
                        >
                          Ask About
                          <span className="ml-2 text-[18px] leading-none">↦</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#1f9ad1] p-0">
                      <div className="relative h-full min-h-65 overflow-hidden">
                        <img src={displayImage} alt={service.title} className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid items-stretch gap-0 lg:grid-cols-[0.95fr_1.35fr]">
                    <div className="bg-[#1f9ad1] p-0">
                      <div className="relative h-full min-h-65 overflow-hidden">
                        <img src={displayImage} alt={service.title} className="h-full w-full object-cover" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center bg-white px-6 py-6 font-['Poppins',sans-serif] sm:px-8 lg:px-10 lg:py-7">
                      {index === 0 && (
                        <p className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.06em] text-slate-900 sm:text-[14px]">
                          <svg viewBox="0 0 48 24" className="h-4 w-8" aria-hidden="true">
                            <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          What We Offer
                        </p>
                      )}
                      {index === 0 ? (
                        <>
                          <h2 className="mt-1 text-[42px] font-extrabold leading-[0.94] tracking-[-0.05em] text-slate-900 sm:text-[52px] lg:text-[56px]">
                            Motor Repairing
                          </h2>
                          <ul className="mt-3 max-w-3xl list-disc space-y-0.5 pl-5 text-[16px] leading-[1.45] tracking-[-0.01em] text-slate-900 sm:text-[18px]">
                            {firstServiceHighlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex justify-end pr-1 sm:mt-5 sm:pr-2">
                            <button
                              type="button"
                              onClick={() => openRequestInfo(service.title)}
                              className="inline-flex items-center rounded-full bg-black px-5 py-3 text-[18px] font-medium tracking-[-0.02em] text-white transition hover:bg-slate-800"
                            >
                              Ask About
                              <span className="ml-2 text-[18px] leading-none">↦</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mt-2 inline-flex items-center gap-3 text-base font-medium uppercase tracking-wide text-slate-900 sm:text-lg">
                            <svg viewBox="0 0 48 24" className="h-5 w-8" aria-hidden="true">
                              <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>WHY CHOSSE OUR REPLACEMENT SERVICE?</span>
                          </p>
                          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                            Replacement Service
                          </h2>
                          <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 sm:text-base">
                            {thirdServiceHighlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex justify-end gap-3">
                            <button
                              type="button"
                              onClick={() => openRequestInfo(service.title)}
                              className="inline-flex items-center rounded-full bg-black px-5 py-3 text-[18px] font-semibold tracking-[-0.02em] text-white transition hover:bg-slate-800"
                            >
                              Ask About
                              <span className="ml-2 text-[18px] leading-none">↦</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <RequestInfoModal
        product={{ name: selectedServiceName }}
        isOpen={isRequestInfoOpen}
        onClose={closeRequestInfo}
        onSubmit={handleRequestSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  )
}

export default ServicePage
