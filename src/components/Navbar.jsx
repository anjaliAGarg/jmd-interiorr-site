import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import labels from '../labels.json'
import logo from '../assets/logopng.png'

const navItems = labels.navigation.links
const WhatsappUrl = labels.contact.whatsappUrl

function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`sticky top-0 z-40 border-b border-transparent backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'bg-white/90 border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-text flex-shrink-0">
          <img
            src={logo}
            alt="JMD Interiors logo"
            className="h-[4rem] w-[6rem] sm:h-[5rem] sm:w-[7.5rem] md:h-[5.5rem] md:w-[8.5rem] lg:h-[6.5rem] lg:w-[10.5rem] object-contain"
          />
        </Link>

        {/* Desktop Navigation (Kept your exact styling) */}
        <nav className="hidden md:flex flex-1 min-w-0 items-center justify-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-base font-medium text-muted transition hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Hamburger */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center rounded-full border border-primary bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-[#24463D]"
          >
            {labels.navigation.consultButton}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-text md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="space-y-1 px-4 py-4 shadow-inner">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="block rounded-md px-3 py-3 text-base font-medium text-muted hover:bg-gray-50 hover:text-text transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
