import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const PRODUCT_CATEGORIES = [
  { value: 'Single disk floor scrubbing machine', label: 'Single Disk Floor Scrubbing Machine' },
  { value: 'janitorial equipments', label: 'Janitorial Equipments' },
  { value: 'floor cleaning chemicals and equipments', label: 'Floor Cleaning Chemicals and Equipments' },
  { value: 'ride on scrubber dryer', label: 'Ride On Scrubber Dryer' },
  { value: 'industrial vacumm cleaner', label: 'Industrial Vacumm Cleaner' },
  { value: 'walk behind scubber dryer', label: 'Walk Behind Scubber Dryer' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsProductsDropdownOpen(false)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflow
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 shadow-sm backdrop-blur-xl">
        <div className="bg-[linear-gradient(90deg,#78C6FF_0%,#6bb2e4_50%,#1880a7_100%)] text-[13px] text-[#0a2230]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 overflow-x-auto px-3 py-1.5 text-[10px] transition-all duration-300 ease-out sm:px-5 sm:text-[11px] md:gap-3 md:text-[12px] lg:px-8 lg:text-[13px]">
            <a
              className="inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90 sm:gap-2"
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

            <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
              <a className="inline-flex items-center gap-1 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90 sm:gap-1.5" href="tel:+92313195138">
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
                +92 331 3195138
              </a>

              <a
                className="shrink-0 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:opacity-90"
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
                className="shrink-0 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:opacity-90"
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

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-main-nav"
              className="ml-auto inline-flex items-center justify-center rounded-md bg-white p-2 text-[#0996d3] transition-colors duration-200 hover:bg-[#eef8fd] md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <nav className=" bg-white hidden flex-1 items-center justify-center gap-10 text-[19px] text-[#1f1f1f] md:flex" aria-label="Main navigation">
              <a href="/#top" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Home</a>
              <a href="/#products" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Products</a>
              <a href="/#services" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Services</a>
              <a href="/#about" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">About Us</a>
              <a href="/#contact" className="relative pb-1 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#0996d3] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#0996d3] after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && createPortal(
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 md:hidden"
          style={{
            zIndex: 99999,
            backgroundColor: '#ffffff',
            opacity: 1,
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            isolation: 'isolate',
          }}
          role="presentation"
        >
          <aside
            id="mobile-main-nav"
            className="overflow-y-auto px-6 py-6"
            style={{
              backgroundColor: '#ffffff',
              opacity: 1,
              minHeight: '100vh',
              width: '100vw',
            }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-2xl font-bold text-[#0996d3]">Menu</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="rounded-md p-2 text-[#1f1f1f] transition-colors duration-200 hover:bg-[#eef8fd]"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-5 text-lg text-[#1f1f1f]" aria-label="Mobile main navigation">
              <a href="/#top" onClick={closeMobileMenu} className="border-b border-slate-200 pb-2 transition-colors hover:text-[#0996d3]">Home</a>
              <div className="border-b border-slate-200 pb-2">
                <button
                  type="button"
                  onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
                  aria-expanded={isProductsDropdownOpen}
                  className="flex w-full items-center justify-between text-left transition-colors hover:text-[#0996d3]"
                >
                  <span>Products</span>
                  <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {isProductsDropdownOpen && (
                  <div className="mt-3 ml-1 flex flex-col gap-2 border-l-2 border-[#d8edf8] pl-3 text-[15px]">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <a
                        key={category.value}
                        href={`/product-list?category=${encodeURIComponent(category.value)}`}
                        onClick={closeMobileMenu}
                        className="transition-colors hover:text-[#0996d3]"
                      >
                        {category.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="/#services" onClick={closeMobileMenu} className="border-b border-slate-200 pb-2 transition-colors hover:text-[#0996d3]">Services</a>
              <a href="/#about" onClick={closeMobileMenu} className="border-b border-slate-200 pb-2 transition-colors hover:text-[#0996d3]">About Us</a>
              <a href="/#contact" onClick={closeMobileMenu} className="border-b border-slate-200 pb-2 transition-colors hover:text-[#0996d3]">Contact Us</a>
            </nav>
          </aside>
        </div>,
        document.body,
      )}
    </>
  )
}

export default Navbar
