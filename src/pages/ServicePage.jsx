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
    'Comprehensive Diagnostics: Detailed inspection to identify and resolve issues quickly.',
    'All Types of Machines Covered: From small handheld devices to large industrial-grade machines.',
    'High-Quality Repairs: We use premium parts and cutting-edge techniques for long-lasting results.',
    'Preventive Maintenance: Extend the lifespan of your equipment with regular servicing.',
    'Quick Turnaround: Minimize disruption with our efficient and timely service.',
  ]
  const secondServiceHighlights = [
    'Cost-Effective Solution: Refilling is a budget-friendly alternative to buying new brushes.',
    'High-Quality Bristles: We use durable and efficient materials tailored to your machine’s requirements.',
    'Enhanced Cleaning Performance: Restored brushes deliver optimal results on every surface.',
    'Quick Turnaround Time: Get your equipment back in action without delays.',
    'Eco-Friendly Option: Extend the lifespan of your brushes, reducing waste.',
  ]
  const thirdServiceHighlights = [
    'Genuine Parts: We provide top-grade, manufacturer-approved parts for durability and compatibility.',
    'Wide Range of Components: From motors and filters to brushes and belts, we’ve got it all covered.',
    'Expert Installation: Our skilled technicians ensure precise installation for seamless operation.',
    'Improved Efficiency: Restore your machine’s performance to optimal levels with new components.',
    'Longevity Guaranteed: Quality parts extend the life of your equipment and prevent future breakdowns.',
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
            return (
              <article
                key={service.title}
                id={serviceSectionIds[index]}
                className="scroll-mt-34 overflow-hidden rounded-none bg-white shadow-[0_10px_30px_rgba(15,64,93,0.16)]"
              >
                <div className="grid items-stretch gap-0 lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="bg-[#1f9ad1] p-0">
                    <div className="relative h-full min-h-65 overflow-hidden">
                      <img src={displayImage} alt={service.title} className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center bg-white px-6 py-6 sm:px-8 lg:px-10 lg:py-7">
                    <p className="text-2xl font-black uppercase tracking-[0.12em] text-slate-900 sm:text-3xl">
                      What We Offer
                    </p>
                    {index === 2 ? (
                      <>
                        <p className="mt-2 inline-flex items-center gap-3 text-base font-medium uppercase tracking-wide text-slate-900 sm:text-lg">
                          <svg viewBox="0 0 48 24" className="h-5 w-8" aria-hidden="true">
                            <path d="M1 12h8l4-7 5 14 5-10 4 6h20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Why Chosse Our Replacement Service?</span>
                        </p>
                        <h2 className="mt-2 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                          Replacement Service
                        </h2>
                        <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 sm:text-base">
                          {thirdServiceHighlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => openRequestInfo(service.title)}
                            className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                          >
                            Ask About
                          </button>
                        </div>
                      </>
                    ) : (
                      <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700 sm:text-base">
                        {(index === 1 ? secondServiceHighlights : firstServiceHighlights).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    {index !== 2 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => openRequestInfo(service.title)}
                          className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                        >
                          Ask About
                        </button>
                      </div>
                    )}
                  </div>
                </div>
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
