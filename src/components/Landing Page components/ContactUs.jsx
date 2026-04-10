import React, { useState } from 'react'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
})

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    issue: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!formData.name || !formData.phone || !formData.email || !formData.issue) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' })
      return
    }

    try {
      setIsSubmitting(true)

      const response = await apiClient.post('/api/contact', formData)
      const result = response.data

      setStatus({ type: 'success', message: result.message || 'Your query has been sent.' })
      setFormData({ name: '', phone: '', email: '', issue: '' })
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Something went wrong.'
      setStatus({ type: 'error', message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="pt-2">
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center text-black">
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                <path
                  d="M4 3v2M20 3v2M3 8h18M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9 13.5l2 2 4-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Contact Us</h2>
          </div>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-black text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path
                    d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black">Location</h3>
                <p className="mt-1 max-w-xl text-lg leading-7 text-slate-800">
                  No- 6, 1st Floor, Park View center 826 -
                  <br />
                  827, CC Area, Block -2 P.E.C.S.H., Karachi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-black text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path
                    d="M3.5 5.8A2.3 2.3 0 0 1 5.8 3.5h12.4a2.3 2.3 0 0 1 2.3 2.3v12.4a2.3 2.3 0 0 1-2.3 2.3H5.8a2.3 2.3 0 0 1-2.3-2.3V5.8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path d="M5.8 6.3 12 11.2l6.2-4.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black">Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@moralclean.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-lg text-black transition-opacity hover:opacity-80"
                >
                  info@moralclean.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-black text-white">
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path
                    d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-black">Phone</h3>
                <a href="tel:+923313195138" className="mt-1 block text-lg text-black transition-opacity hover:opacity-80">
                  +92 331 3195138
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black px-6 py-8 text-white sm:px-8 sm:py-10">
          <h3 className="text-center text-3xl font-semibold sm:text-4xl">How can we help you!</h3>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-full border border-transparent bg-white px-4 text-sm text-black outline-none transition focus:border-sky-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="h-12 w-full border border-transparent bg-white px-4 text-sm text-black outline-none transition focus:border-sky-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="h-12 w-full border border-transparent bg-white px-4 text-sm text-black outline-none transition focus:border-sky-400"
            />
            <textarea
              name="issue"
              placeholder="Your Query"
              rows="4"
              value={formData.issue}
              onChange={handleChange}
              className="w-full border border-transparent bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-sky-400"
            />

            {status.message && (
              <p className={`text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-white px-8 py-3 text-base font-medium text-white transition hover:bg-white hover:text-black"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
