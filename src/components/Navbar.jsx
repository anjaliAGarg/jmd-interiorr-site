import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import labels from '../labels.json'
import logo from '../assets/logopng.png'

const navItems = labels.navigation.links
const WhatsappUrl = labels.contact.whatsappUrl

function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false)

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
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-text flex-shrink-0">
          <img
            src={logo}
            alt="JMD Interiors logo"
            className="h-[4rem] w-[6rem] sm:h-[5rem] sm:w-[7.5rem] md:h-[5.5rem] md:w-[8.5rem] lg:h-[6.5rem] lg:w-[10.5rem] object-contain"
          />
        </Link>
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
        <div className="flex flex-shrink-0 items-center gap-4">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center rounded-full border border-primary bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-[#24463D]"
          >
            {labels.navigation.consultButton}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
