import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-sm backdrop-blur-xl">
      <div className="bg-[linear-gradient(90deg,#78C6FF_0%,#6bb2e4_50%,#1880a7_100%)] text-[13px] text-[#0a2230]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-1.5 transition-all duration-300 ease-out sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <a
            className="inline-flex w-fit items-center gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@moralclean.com"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M3 6h18v12H3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M3 7l9 7 9-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            info@moralclean.com
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <a className="inline-flex items-center gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90" href="tel:+92313195138">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +92-3313195138
            </a>

            <a
              className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:opacity-90"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.87 3.78-3.87 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.25 0-1.64.77-1.64 1.57V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12z" fill="currentColor" />
              </svg>
            </a>

            <a
              className="transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:opacity-90"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.98 1.34a1.08 1.08 0 1 1 0 2.17 1.08 1.08 0 0 1 0-2.17zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white transition-shadow duration-300 ease-out hover:shadow-md">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/#top" className="text-[40px] font-bold leading-none text-[#0996d3] transition-transform duration-300 ease-out hover:scale-[1.03]">
            Moral Clean
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-10 text-[19px] text-[#1f1f1f] md:flex" aria-label="Main navigation">
            <a href="/#top" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="/#products" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Products</a>
            <a href="/#services" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="/#about" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">About Us</a>
            <a href="/#contact" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
