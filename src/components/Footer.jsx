import React from 'react'
import { Link } from 'react-router-dom'
import LeavesImage from '../assets/LandingPage/Leaves.png'

const Footer = () => {
  return (
    <footer className="w-full bg-transparent">
      <section className="border-t-2 border-sky-500 bg-black px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-5 text-center">
          <h2 className="text-2xl font-black uppercase leading-tight sm:text-4xl">
            Subscribe For Our News Letter!
          </h2>

          <form className="flex w-full max-w-2xl flex-col gap-0 sm:flex-row">
            <input
              type="email"
              placeholder="Subscribe for our news letter"
              className="h-12 w-full border border-sky-400 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-300 sm:flex-1"
            />
            <button
              type="button"
              className="h-12 border border-sky-400 bg-black px-6 text-sm font-semibold text-white transition hover:bg-sky-400 hover:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-transparent px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1.4fr] lg:items-start">
            <div>
              <h3 className="text-4xl font-black text-white sm:text-5xl">
                Moral Clean <img src={LeavesImage} alt="Leaf" className="inline h-10 w-10" />
              </h3>
              <p className="mt-8 max-w-md text-sm leading-7 text-white/95 sm:text-base">
                At Moral Clean, we specialize in providing top-quality commercial cleaning products
                and reliable repair services. Our mission is to deliver solutions that ensure
                cleanliness, efficiency, and customer satisfaction. Trust us for all your cleaning
                and maintenance needs.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">
              <div className="space-y-4 text-base text-black">
                <a className="block transition hover:opacity-80" href="/#top">Home</a>
                <a className="block transition hover:opacity-80" href="/#products">Product</a>
                <Link className="block transition hover:opacity-80" to="/services">Services</Link>
                <a className="block transition hover:opacity-80" href="/#contact">Contect Us</a>
              </div>

              <div className="space-y-4 text-base text-black">
                <a className="block transition hover:opacity-80" href="#jobs">Jobs</a>
                <a className="block transition hover:opacity-80" href="#partners">Partners</a>
                <a className="block transition hover:opacity-80" href="#privacy">Privacy</a>
                <a className="block transition hover:opacity-80" href="#terms">Term of Use</a>
              </div>

              <div className="space-y-4 text-base text-black">
                <a className="flex items-center gap-2 transition hover:opacity-80" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-black text-[10px]">f</span>
                  Facebook
                </a>
                <a className="flex items-center gap-2 transition hover:opacity-80" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-black text-[10px]">◎</span>
                  Instagram
                </a>
                <a className="flex items-center gap-2 transition hover:opacity-80" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-xs border border-black text-[10px]">in</span>
                  Linkedin
                </a>
                <a className="flex items-center gap-2 transition hover:opacity-80" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-xs border border-black text-[10px]">▶</span>
                  Youtube
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/60 pt-6 text-center text-sm text-white">
            Copyright © 2024 Moral Clean. All Rights Reserved.
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
