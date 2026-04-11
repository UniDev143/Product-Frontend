import React, { useEffect, useState } from 'react'

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  issue: '',
}

const RequestInfoModal = ({ product, isOpen, onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData)
    }
  }, [isOpen])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none text-slate-500 transition hover:text-slate-900"
          aria-label="Close request info form"
        >
          ×
        </button>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#129ed6]">Request Info</p>
        <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Ask about {product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill in your details and our team will email you back shortly.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-[#129ed6]"
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-[#129ed6]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-[#129ed6]"
          />
          <textarea
            name="issue"
            placeholder="What would you like to ask?"
            rows="4"
            value={formData.issue}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#129ed6]"
          />

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center rounded-lg bg-[#129ed6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f88bb] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestInfoModal
