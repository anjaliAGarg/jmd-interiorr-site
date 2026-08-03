import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import labels from '../labels.json'

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-[0.18em] text-text">
          JMD INTERIORS
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="text-sm font-medium text-muted transition hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
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
